import { ByteUtils } from '../../utils/byte-utils.js';
import { FileUtils } from '../../utils/file-utils.js';
import { Cps2RomDefinition } from '../definition/cps2-rom-definition.js';
import { MraDefinition, Patch } from './cps2-rom-patch.js';

export class Cps2RomPatcher {

  static async patchRegionWithMra(romDefinition: Cps2RomDefinition, regionName: string, originalBinary: Uint8Array, originalRomParts: File[], mraFile: File): Promise<{ modifiedParts: File[], modifiedBinary: Uint8Array, modifiedRomBlob: Blob }> {
    const mraPatches = await this.processMraFile(mraFile);
    if (!mraPatches.patches.length) {
      return Promise.reject('.mra file contains no patches');
    }
    const patches = mraPatches.patches;
    const eeprom = mraPatches.eepromBytes;
    let modifiedRomBinary = new Uint8Array(originalBinary);
    for (const patch of patches) {
      for (let i = 0; i < patch.bytes.length; i++) {
        modifiedRomBinary[patch.offset + i] = patch.bytes[i];
      }
    }
    const modifiedRomParts = await FileUtils.splitRegionBinaryToFiles(modifiedRomBinary, romDefinition[regionName]);
    const modifiedFilenames = modifiedRomParts.map((file) => file.name);
    const unmodifiedRomParts = originalRomParts.filter((file) => !modifiedFilenames.includes(file.name));
    modifiedRomParts.push(...unmodifiedRomParts);
    if (eeprom.length) {
      modifiedRomParts.push(FileUtils.createFileFromUint8Array(eeprom, 'eeprom'));
    }
    const zipFile = await FileUtils.createZipFile(modifiedRomParts);
    return Promise.resolve({ modifiedParts: modifiedRomParts, modifiedBinary: modifiedRomBinary, modifiedRomBlob: zipFile });
  }

  private static async processMraFile(mraFile: File): Promise<MraDefinition> {
    const patches: Patch[] = [];
    let eeprom = new Uint8Array();
    const domParser = new DOMParser();
    try {
      const xmlDoc = domParser.parseFromString(await mraFile.text(), 'text/html') as XMLDocument;
      const nvramIndex = xmlDoc.querySelector('nvram')?.getAttribute('index');
      let eepromString = '';
      if (nvramIndex !== null) {
        xmlDoc.querySelectorAll('rom').forEach((rom) => {
          if (rom.getAttribute('index') && rom.getAttribute('index') === nvramIndex) {
            rom.childNodes.forEach((child) => {
              if (child && child.nodeName === 'part') {
                eepromString += child.textContent ?? '';
              }
            });
          }
        });
        if (eepromString) {
          eeprom = ByteUtils.convertDelimitedHexStringToUint8Array(eepromString);
        }
      }
      xmlDoc.querySelectorAll('patch').forEach((patch) => {
        const offset = Number(patch.getAttribute('offset')) - 0x40;
        const bytes = ByteUtils.convertDelimitedHexStringToUint8Array(patch.textContent ?? '');
        patches.push({ offset: offset, bytes: bytes, });
      });
    } catch (error) {
      return Promise.reject(new Error('Invalid .mra file'));
    }
    return Promise.resolve({
      patches: patches,
      eepromBytes: eeprom,
    });
  }

}