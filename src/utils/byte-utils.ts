export class ByteUtils {

  static convertDelimitedHexStringToUint8Array(hexString: string, delimeter = ' '): Uint8Array {
    const bytesAsStrings = hexString.split(delimeter);
    const buffer = new Uint8Array(bytesAsStrings.length);
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = Number(`0x${bytesAsStrings[i]}`)
    }
    return buffer;
  }

  static getFFBytes(bytes: number): Uint8Array {
    return new Uint8Array(bytes).fill(0xFF);
  }

  static swapGroups(fileBuffer: Uint8Array, groupSize: number): Uint8Array {
    const result = new Uint8Array(fileBuffer.length);
  
    for (let i = 0; i < fileBuffer.length; i += groupSize) {
      const endIndex = Math.min(i + groupSize, fileBuffer.length);
  
      for (let j = i; j < endIndex; j++) {
        const groupIndex = j - i;
        const swappedIndex = endIndex - groupIndex - 1;
        result[j] = fileBuffer[swappedIndex];
      }
    }
  
    return result;
  }

}