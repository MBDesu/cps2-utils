import { Cps2Rom } from '../index.js';
import { roms } from '../roms.js';
import { FileUtils } from '../utils/file-utils.js';

export class Cps2Utils {

  /**
   * @returns An array of the names of the supported ROMs.
   */
  static getSupportedRoms(): string[] {
    return Object.keys(roms);
  }

  /**
   * Splits a .bin into its constituent ROM files.
   * @param binFile The .bin to split into files
   * @param rom A `Cps2Rom` instantiation of the ROM the .bin is for, or the name of the ROM
   * @returns A .zip file containing the split files
   */
  static async splitExecutableBinToFiles(binFile: File, rom: Cps2Rom | string, outputFilename?: string): Promise<File> {
    let romName = '';
    if (rom instanceof Cps2Rom) {
      romName = rom.getName();
    } else {
      romName = rom;
    }

    const romDefinition = roms[romName];
    if (!romDefinition) {
      return Promise.reject(new Error('Invalid ROM'));
    }

    const executableRegionMetadata = romDefinition['maincpu'].operations;
    const binFileBytes = await FileUtils.convertFileToUint8Array(binFile);
    const files: File[] = [];

    executableRegionMetadata.forEach((operation) => {
      if (operation.type === 'load') {
        files.push(FileUtils.createFileFromUint8Array(binFileBytes.slice(operation.offset, operation.offset + operation.length), operation.filename));
      }
    });

    const zipBlob = await FileUtils.createZipFile(files);
    return Promise.resolve(new File([zipBlob], outputFilename || `${romName}_bin.zip`));
  }

}