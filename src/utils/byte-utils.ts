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

  static uint8ArrayToBigUint64Array(arr: Uint8Array): BigUint64Array {
    if (arr.length % 8 !== 0) throw new Error('Input length must be divisible by 8');
    const dataView = new DataView(arr.buffer);
    const bigUint64Array = new BigUint64Array(arr.length / 8);

    for (let i = 0; i < bigUint64Array.length; i++) {
      const bigUint64Value = dataView.getBigUint64(i * 8, true);
      bigUint64Array[i] = bigUint64Value;
    }

    return bigUint64Array;
  }

  static bigUint64ArrayToUint8Array(arr: BigUint64Array): Uint8Array {
    const uint8Array = new Uint8Array(arr.length * 8);
    const dataView = new DataView(uint8Array.buffer);

    for (let i = 0; i < arr.length; i++) {
      const bigUint64Value = arr[i];
      dataView.setBigUint64(i * 8, bigUint64Value, true);
    }

    return uint8Array;
  }

}