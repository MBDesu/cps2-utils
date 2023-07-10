import { ByteUtils } from '../../utils/byte-utils.js';
import { Cps2RomDefinition } from '../definition/cps2-rom-definition.js';
import { Rom } from '../rom-region.js';

export class Cps2RomProcessor {

  /**
   * Finds which files may be missing from a ROM.
   * @param romFiles The files read from the .zip supplied to `Cps2Rom`
   * @param romDefinition The definition file found from `roms`
   * @returns An array of the missing filenames
   */
  static findMissingRomFiles(romFiles: File[], romDefinition: Cps2RomDefinition): string[] {
    const regions = Object.keys(romDefinition);
    const filenames = romFiles.map(romFile => romFile.name);
    const missingFiles: string[] = [];
    regions.forEach((region) => {
      romDefinition[region].operations.forEach((operation) => {
        if (operation.type === Rom.Region.Operation.Type.LOAD) {
          if (!filenames?.find((filename) => filename === operation.filename)) missingFiles.push(operation.filename);
        }
      });
    });
    return missingFiles;
  }

  /**
   * Performs the operations specified by a `Cps2RomDefinition` on a ROM region
   * @param romFiles The files from the ROM's .zip
   * @param regions The regions contained in the ROM definition
   * @param regionName The region to operate on
   * @returns The processed region, in bytes
   */
  static async processRegion(romFiles: File[], regions: Cps2RomDefinition, regionName: string): Promise<Uint8Array> {
    const region = regions[regionName];
    const processedBinary = new Uint8Array(region.size);
    for (let i = 0; i < region.operations.length; i++) {
      const operation = region.operations[i];
      let bufPtr = region.operations[i].offset;
      if (operation.type === Rom.Region.Operation.Type.LOAD) {
        bufPtr = await this.processLoadOperation(romFiles, operation, processedBinary, bufPtr);
      } else if (operation.type === Rom.Region.Operation.Type.CONTINUE) {
        // TODO: implementation
      } else if (operation.type === Rom.Region.Operation.Type.FILL) {
        // TODO: implementation
      }
    }
    if (regionName === Rom.Region.Type.EXECUTABLE) {
      return ByteUtils.swapGroups(processedBinary, 2);
      // TODO:
    // } else if (regionName === Rom.RegionType.GRAPHICS) {
    //   this.decodeGraphics(processedBinary, region.size);
    }
    return Promise.resolve(processedBinary);
  }

  private static async processLoadOperation(romFiles: File[], operation: Rom.RegionLoadOperation, bytes: Uint8Array, bufPtr: number): Promise<number> {
    const operatingFile = romFiles.find((file) => file.name === operation.filename)!; // guaranteed to exist if validation happened first
    const fileBuffer = new Uint8Array(await operatingFile.arrayBuffer());
    let bytesLeft = operation.length;
    let skip = operation.skip + operation.groupSize;

    if ((operation.groupSize === 1 || !operation.reverse) && operation.skip === 0) {
      for (let i = 0; i < bytesLeft; i++) {
        bytes[bufPtr++] = fileBuffer[i];
      }
    } else if (operation.groupSize === 1) {
      for (let i = 0; i < bytesLeft; i++) {
        bytes[bufPtr++] = fileBuffer[i];
      }
    } else if (!operation.reverse) {
      for (let i = 0; i < operation.length && bytesLeft; i++) {
        for (let j = 0; j < operation.groupSize && bytesLeft; j++, bytesLeft--)
          bytes[j + bufPtr] = fileBuffer[i + j];
        bufPtr += skip;
      }
    } else {
      let bytesWritten = 0;
      while (bytesWritten < operation.length) {
        for (let j = operation.groupSize - 1; j >= 0; j--) {
          bytes[bufPtr + j] = fileBuffer[bytesWritten++];
        }
        bufPtr += skip;
      }
    }
    return Promise.resolve(bufPtr);
  }

}
