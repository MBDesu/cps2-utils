import { ByteUtils } from '../../utils/byte-utils.js';
import { FileUtils } from '../../utils/file-utils.js';
import { Cps2RomDefinition } from '../definition/cps2-rom-definition.js';
import { Rom } from '../rom-region.js';

export class Cps2RomConverter {

  async convertMameRomToDarksoft(romParts: File[], definition: Cps2RomDefinition): Promise<File[]> {
    const files: File[] = [];
    for (const region of Object.keys(definition)) {
      switch (region) {
        case Rom.Region.Type.AUDIO_CPU:
          await this.formatAudiocpuForDarksoft(romParts, definition[Rom.Region.Type.AUDIO_CPU]).then((flashFile) => {
            files.push(flashFile);
          });
          break;
        case Rom.Region.Type.EXECUTABLE:
          await this.formatMaincpuForDarksoft(romParts, definition[Rom.Region.Type.EXECUTABLE]).then((flashFile) => {
            files.push(flashFile);
          });
          break;
        case Rom.Region.Type.AUDIO_QSOUND:
          await this.formatQsoundForDarksoft(romParts, definition[Rom.Region.Type.AUDIO_QSOUND]).then((flashFiles) => {
            flashFiles.forEach((file) => files.push(file));
          });
          break;
        case Rom.Region.Type.GRAPHICS:
          await this.formatGfxForDarksoft(romParts, definition[Rom.Region.Type.GRAPHICS]).then((flashFiles) => {
            flashFiles.forEach((file) => files.push(file));
          });
          break;
        case Rom.Region.Type.KEY:
          await this.formatKeyForDarksoft(romParts, definition[Rom.Region.Type.KEY]).then((keyFile) => {
            files.push(keyFile);
          });
          break;

        default:
          break;
      }
    }
    return Promise.resolve(files);
  }

  private async formatAudiocpuForDarksoft(romParts: File[], audiocpuRegion: Rom.Region): Promise<File> {
    const audiocpuBytes = ByteUtils.getFFBytes(0x400000);
    const files = this.getRegionFiles(romParts, audiocpuRegion.operations);
    let bytesOffset = 0;

    for (const file of files) {
      const fileBytes = await FileUtils.convertFileToUint8Array(file);
      audiocpuBytes.set(fileBytes, bytesOffset);
      bytesOffset += fileBytes.length;
    }
    return Promise.resolve(FileUtils.createFileFromUint8Array(audiocpuBytes, 'flash.01'));
  }

  private async formatMaincpuForDarksoft(romParts: File[], maincpuRegion: Rom.Region): Promise<File> {
    const maincpuBytes = ByteUtils.getFFBytes(0x400000);
    const files = this.getRegionFiles(romParts, maincpuRegion.operations);
    let bytesOffset = 0;

    for (const file of files) {
      const fileBytes = await FileUtils.convertFileToUint8Array(file);
      maincpuBytes.set(fileBytes, bytesOffset);
      bytesOffset += fileBytes.length;
    }
    return Promise.resolve(FileUtils.createFileFromUint8Array(maincpuBytes, 'flash.02'));
  }

  private async formatQsoundForDarksoft(romParts: File[], qsoundRegion: Rom.Region): Promise<File[]> {
    const flashBytes = ByteUtils.getFFBytes(0x800000);
    const files = this.getRegionFiles(romParts, qsoundRegion.operations);
    const combinedQsoundFiles = await FileUtils.concatenateFilesToUint8Array(files);

    flashBytes.set(combinedQsoundFiles);
    const result: File[] = [];
    result.push(FileUtils.createFileFromUint8Array(flashBytes.slice(0, 0x400000), 'flash.03'))
    if (combinedQsoundFiles.length > 0x400000) {
      result.push(FileUtils.createFileFromUint8Array(flashBytes.slice(0x400000), 'flash.04'));
    }
    return Promise.resolve(result);
  }

  // TODO: really need to test this thoroughly for correctness
  private async formatGfxForDarksoft(romParts: File[], gfxRegion: Rom.Region): Promise<File[]> {
    const files = this.getRegionFiles(romParts, gfxRegion.operations);

    const result: File[] = [];
    for (let i = 0; i < files.length; i++) {
      const file1 = files[i];
      const file2 = files[i + 1];
      let file1Bytes = await FileUtils.convertFileToUint8Array(file1);
      let file2Bytes = await FileUtils.convertFileToUint8Array(file2);
      let resultFile1: File;
      let resultFile2: File;
      if (file1Bytes.length === 0x800000) {
        file1Bytes = file1Bytes.slice(0, 0x400000);
        file2Bytes = file1Bytes.slice(0x400000);
        resultFile1 = FileUtils.createFileFromUint8Array(file1Bytes, `flash.${(i + 5).toString().padStart(2, '0')}`);
        resultFile2 = FileUtils.createFileFromUint8Array(file2Bytes, `flash.${(i + 6).toString().padStart(2, '0')}`);
        result.push(resultFile1, resultFile2);
        continue;
      } else if (file1Bytes.length === 0x400000) {
        resultFile1 = FileUtils.createFileFromUint8Array(file1Bytes, `flash.${(i + 5).toString().padStart(2, '0')}`);
        const resultFile2Bytes = ByteUtils.getFFBytes(0x400000);
        resultFile2Bytes.set(file2Bytes);
        resultFile2 = FileUtils.createFileFromUint8Array(resultFile2Bytes, `flash.${(i + 6).toString().padStart(2, '0')}`);
        result.push(resultFile1, resultFile2);
        i++;
        continue;
      } else if (file1Bytes.length <= 0x200000) {
        const resultFile1Bytes = ByteUtils.getFFBytes(0x200000);
        const resultFile2Bytes = ByteUtils.getFFBytes(0x200000);
        const resultBytes = ByteUtils.getFFBytes(0x400000);
        resultFile1Bytes.set(file1Bytes);
        resultFile2Bytes.set(file2Bytes);
        resultBytes.set(resultFile1Bytes);
        resultBytes.set(resultFile2Bytes, 0x200000);
        resultFile1 = FileUtils.createFileFromUint8Array(resultBytes, `flash.${(i + 5).toString().padStart(2, '0')}`);
        result.push(resultFile1);
        i++;
        continue;
      }
    }
    return Promise.resolve(result);
  }

  private async formatKeyForDarksoft(romParts: File[], keyRegion: Rom.Region): Promise<File> {
    const regionOperation = keyRegion.operations[0];
    if (regionOperation.type === Rom.Region.Operation.Type.LOAD) { // should always be true
      const keyFile = romParts.find((file) => file.name === regionOperation.filename); // should always exist
      const keyFileBytes = await FileUtils.convertFileToUint8Array(keyFile!);
      return Promise.resolve(FileUtils.createFileFromUint8Array(keyFileBytes, 'key'));
    }
    return Promise.reject(new Error('Something went wrong'));
  }

  // lexicographically sorts the files by name
  private getRegionFiles(romParts: File[], regionOperations: Rom.RegionOperation[]): File[] {
    const result: File[] = [];
    for (const operation of regionOperations) {
      if (operation.type === Rom.Region.Operation.Type.LOAD) {
        const file = romParts.find((file) => file.name === operation.filename);
        result.push(file!); // file must be defined here else cps2-rom would have thrown an error
      }
    }
    FileUtils.orderRomFilesByNumericExtension(result);
    return result;
  }

}