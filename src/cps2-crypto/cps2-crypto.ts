import { Cps2Rom } from '../index.js';
import { FileUtils } from '../utils/file-utils.js';
import { Cps2Crypter } from './cps2-crypter.js';

export class Cps2Crypto {

  static async encryptBinOpcodes(binFile: File, rom: Cps2Rom): Promise<File> {
    return this.cryptBinOpcodes(Cps2Crypter.Direction.Encrypt, binFile, rom);
  }

  static async decryptBinOpcodes(binFile: File, rom: Cps2Rom): Promise<File> {
    return this.cryptBinOpcodes(Cps2Crypter.Direction.Decrypt, binFile, rom);
  }

  private static async cryptBinOpcodes(direction: Cps2Crypter.Direction, binFile: File, rom: Cps2Rom): Promise<File> {
    try {
      await rom.read();
      const romParts = rom.getFiles();

      // will have errored if the key wasn't in the ROM
      const keyFile = romParts!.find((file) => FileUtils.fileHasExtension(file, 'key'));
      const keyBinary = await FileUtils.convertFileToUint8Array(keyFile!);
      const opcodeBinary = await FileUtils.convertFileToUint8Array(binFile);
      const crypter = new Cps2Crypter(opcodeBinary, keyBinary);
      const encryptedBytes = crypter.cps2Crypt(direction);
      return Promise.resolve(FileUtils.createFileFromUint8Array(encryptedBytes, binFile.name));
    } catch (error) {
      return Promise.reject(error);
    }
  }

}