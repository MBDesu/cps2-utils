import { Cps2Crypter } from '../cps2-crypto/cps2-crypter.js';
import { roms } from '../roms.js';
import { FileUtils } from '../utils/file-utils.js';
import { Cps2RomConverter } from './converter/cps2-rom-converter.js';
import { Cps2RomDefinition } from './definition/cps2-rom-definition.js';
import { Cps2RomPatcher } from './patcher/cps2-rom-patcher.js';
import { Cps2RomProcessor } from './processor/cps2-rom-processor.js';
import { Rom } from './rom-region.js';

export class Cps2Rom {

  private darksoftRom?: File;
  private decryptedOpcodes?: Uint8Array;
  private definition?: Cps2RomDefinition;
  // private graphicsBinary?: Uint8Array;
  private hasBeenRead = false;
  private modifiedBinary?: Uint8Array;
  private modifiedParts?: File[];
  private modifiedRom?: File;
  private name: string;
  private originalBinary?: Uint8Array;
  private parts?: File[];
  private processedRegions: string[] = [];
  private romZip: File;

  /**
   * @param romZip The .zip file the ROM data is in
   * 
   * Must call `read()` before doing anything more.
   */
  constructor(romZip: File) {
    this.romZip = romZip;
    this.name = FileUtils.getFileName(this.romZip);
  }

  /**
   * Read the ROM files. Necessary before doing anything else. Stores the parsed
   * ROM files in `files`.
   * @returns
   */
  async read(): Promise<this> {
    if (this.hasBeenRead) {
      return Promise.resolve(this);
    }
    this.definition = roms[this.name!];
    if (!this.definition) {
      return Promise.reject(new Error('Invalid ROM. Ensure the rom has its original name and file extension (.zip)'));
    }
    this.parts = await FileUtils.readZipFile(this.romZip);
    const missingFiles = Cps2RomProcessor.findMissingRomFiles(this.parts, this.definition);
    if (missingFiles.length) {
      return Promise.reject(new Error(`ROM is missing: ${missingFiles.join(', ')}`));
    }
    this.hasBeenRead = true;
    return Promise.resolve(this);
  }

  /**
   * Processes the executable region of the ROM. This processes the executable
   * region and stores the concatenated binary in `binary`. Must call `read()`
   * before calling this.
   * @returns
   */
  async processExecutable(): Promise<this> {
    if (!this.parts || !this.definition) {
      return Promise.reject('Must call .read() before processing');
    }
    if (this.processedRegions.includes(Rom.Region.Type.EXECUTABLE)) {
      return Promise.resolve(this);
    }
    const regionBinary = await Cps2RomProcessor.processRegion(this.parts, this.definition, Rom.Region.Type.EXECUTABLE);
    this.processedRegions.push(Rom.Region.Type.EXECUTABLE);
    this.originalBinary = regionBinary;
    return Promise.resolve(this);
  }

  // async processGraphics(): Promise<this> {
  //   if (!this.parts || !this.definition) {
  //     return Promise.reject('Must call .read() before processing');
  //   }
  //   if (this.processedRegions.includes(Rom.Region.Type.GRAPHICS)) {
  //     return Promise.resolve(this);
  //   }
  //   const graphicsBinary = await Cps2RomProcessor.processRegion(this.parts, this.definition, 'gfx');
  //   this.processedRegions.push(Rom.Region.Type.GRAPHICS);
  //   this.graphicsBinary = graphicsBinary;
  //   return Promise.resolve(this);
  // }

  /**
   * Decrypts the opcodes and stores the result in `decryptedOpcodes`. Must call
   * `read()` and `processExecutable()` before calling this.
   * @returns
   */
  async decryptOpcodes(): Promise<this> {
    if (this.decryptedOpcodes) {
      return Promise.resolve(this);
    }
    if (!this.hasBeenRead || !this.parts) {
      return Promise.reject(new Error('Must call read() before decrypting'))
    }
    if (!this.processedRegions.includes(Rom.Region.Type.EXECUTABLE) || !this.originalBinary) {
      return Promise.reject(new Error('Must call processExecutable() before decrypting'));
    }
    const key = this.parts.find((file) => file.name === `${this.name}.key`);
    if (!key) {
      return Promise.reject(new Error('Somehow missing .key file'));
    }
    const keyBytes = await FileUtils.convertFileToUint8Array(key);
    const crypter = new Cps2Crypter(this.originalBinary, keyBytes);
    this.decryptedOpcodes = crypter.cps2Crypt(Cps2Crypter.Direction.Decrypt);
    return Promise.resolve(this);
  }

  /**
   * Patches the ROM and stores the result in `modifiedRom`. Must call `read()`
   * and `processExecutable()` before calling this.
   * @param patchFile The .mra file to patch with
   * @returns 
   */
  async patchWith(patchFile: File): Promise<this> {
    if (!this.hasBeenRead || !this.parts || !this.definition || !this.name) {
      return Promise.reject(new Error('Must call read() before patching'))
    }
    if (!this.processedRegions.includes(Rom.Region.Type.EXECUTABLE) || !this.originalBinary) {
      return Promise.reject(new Error('Must call processExecutable() before patching'));
    }
    const patchType = FileUtils.getFileExtension(patchFile);
    if (patchType === 'mra') {
      const patchedRomResults = await Cps2RomPatcher.patchRegionWithMra(this.definition, Rom.Region.Type.EXECUTABLE, this.originalBinary, this.parts, patchFile);
      this.modifiedParts = patchedRomResults.modifiedParts;
      this.modifiedBinary = patchedRomResults.modifiedBinary;
      this.modifiedRom = new File([patchedRomResults.modifiedRomBlob], this.romZip.name)
    // } else if (patchType === 'ips') {
      // TODO:
    // }
    } else {
      return Promise.reject(new Error('Invalid patch file'));
    }
    return Promise.resolve(this);
  }

  /**
   * Converts the ROM to Darksoft format and stores the result in `darksoftRom`
   * in .zip format. Must call `read()` before calling this.
   * @returns 
   */
  async convertToDarksoft(): Promise<this> {
    if (!this.hasBeenRead || !this.parts || !this.definition || !this.name) {
      return Promise.reject(new Error('Must call read() before patching'))
    }
    const darksoftRomFiles = await new Cps2RomConverter().convertMameRomToDarksoft(this.parts, this.definition);
    const darksoftZip = await FileUtils.createZipFile(darksoftRomFiles);
    this.darksoftRom = new File([darksoftZip], this.romZip.name);
    return Promise.resolve(this);
  }

  /**
   * @returns The ROM part files
   */
  getFiles(): File[] | undefined {
    return this.parts;
  }

  /**
   * @returns The ROM name
   */
  getName(): string {
    return this.name;
  }

  /**
   * @returns The ROM definition of this ROM
   */
  getDefinition(): Cps2RomDefinition | undefined {
    return this.definition;
  }

  /**
   * @returns The original (unmodified) binary of the executable parts of ROM
   */
  getBinary(): Uint8Array | undefined {
    return this.originalBinary;
  }

  /**
   * @returns The decrypted opcodes of the executable parts of ROM, if the ROM
   * was decrypted
   */
  getDecryptedOpcodes(): Uint8Array | undefined {
    return this.decryptedOpcodes;
  }
  
  /**
   * @returns The modified ROM executable binary, if the ROM was patched
   */
  getModifiedBinary(): Uint8Array | undefined {
    return this.modifiedBinary;
  }

  /**
   * @returns The patched ROM, if the ROM was patched
   */
  getModifiedRom(): File | undefined {
    return this.modifiedRom;
  }

  /**
   * @returns The files that were modified in patching, if the ROM was patched
   */
  getModifiedParts(): File[] | undefined {
    return this.modifiedParts;
  }

  /**
   * @returns The ROM in Darksoft format, if it has been converted
   */
  getDarksoftRom(): File | undefined {
    return this.darksoftRom;
  }

  /**
   * @returns The ROM zip originally supplied to the constructor of this object.
   */
  getRomZip(): File {
    return this.romZip;
  }

  /**
   * @returns The ROM graphics binary, if it has been processed
   */
  // getGraphicsBinary(): Uint8Array | undefined { 
  //   return this.graphicsBinary;
  // }

}
