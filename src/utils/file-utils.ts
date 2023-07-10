import JSZip from 'jszip';
import { Rom } from '../cps2-rom/rom-region.js';

export class FileUtils {

  static getFileName(file: File, withExtension = false): string {
    if (withExtension) return file.name;
    const fullFilenameDotDelimited = file.name.split('.');
    return fullFilenameDotDelimited.slice(0, fullFilenameDotDelimited.length - 1).join('');
  }

  /**
   * To be passed as a predicate.
   * @param fileHandle 
   */
  static fileHasExtension(file: File, extension: string): boolean {
    return this.getFileExtension(file) === extension.toLowerCase();
  }

  static getFileExtension(file: File): string {
    return file.name.split('.').pop()?.toLowerCase() || '';
  }

  static async convertFileToUint8Array(file: File): Promise<Uint8Array> {
    const fileBuffer = await file.arrayBuffer();
    return new Uint8Array(fileBuffer);
  }

  static orderRomFilesByNumericExtension(files: File[]): void {
    files.sort((a, b) => {
      const aExt = this.getFileExtension(a).replace(/[^\d]/, '');
      const bExt = this.getFileExtension(b).replace(/[^\d]/, '');
      return aExt.localeCompare(bExt); // TODO: is localeCompare safe here...?
    });
  }

  static async concatenateFilesToUint8Array(files: File[]): Promise<Uint8Array> {
    let len = 0;
    for (const file of files) {
      len += file.size;
    }
    const result = new Uint8Array(len);
    let offset = 0;
    for (const file of files) {
      const fileBuffer = await file.arrayBuffer();
      result.set(new Uint8Array(fileBuffer), offset);
      offset += file.size;
    }
    return Promise.resolve(result);
  }

  static splitRegionBinaryToFiles(regionBinary: Uint8Array, regionDefinition: Rom.Region): Promise<File[]> {
    const operations = regionDefinition.operations;
    const files: File[] = [];
    for (const operation of operations) {
      if (operation.type === Rom.Region.Operation.Type.LOAD) {
        files.push(this.createFileFromUint8Array(regionBinary.slice(operation.offset, operation.offset + operation.length), operation.filename));
      }
    }
    return Promise.resolve(files);
  }

  static async createZipFile(filesToZip: File[]): Promise<Blob> {
    const zip = new JSZip();
    const filePromises: Promise<void>[] = [];

    filesToZip.forEach(async (file) => {
      const filePromise = this.readFile(file).then((fileData) => {
        zip.file(file.name, fileData);
      });
      filePromises.push(filePromise);
    });

    await Promise.all(filePromises);

    return zip.generateAsync({ type: 'blob' });
  }

  static async readFile(file: File): Promise<ArrayBuffer> {
    return new Promise<ArrayBuffer>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result as ArrayBuffer);
      fileReader.onerror = () => reject(fileReader.error);
      fileReader.readAsArrayBuffer(file);
    });
  }

  static createFileFromUint8Array(arr: Uint8Array, filename: string): File {
    return new File([new Blob([arr])], filename);
  }

  static async readZipFile(zipFile: File): Promise<File[]> {
    const zip = new JSZip();

    const zipData = await this.readFile(zipFile);
    const loadedZip = await zip.loadAsync(zipData);
    const files: Promise<File>[] = [];

    loadedZip.forEach((_: string, zipEntry: JSZip.JSZipObject) => {
      if (!zipEntry.dir) {
        const filePromise = zipEntry.async('uint8array').then((fileData: Uint8Array) => {
          return this.createFileFromUint8Array(fileData, zipEntry.name);
        });
        files.push(filePromise);
      }
    });
    return Promise.all(files);
  }

}
