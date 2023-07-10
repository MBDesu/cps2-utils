// leaving the below in case mame-file-definition-parser needs to be used again
// export namespace Rom {

//   export abstract class RegionOperation {
//     offset: number;
//     length: number;
//     type: string;

//     constructor(offset: number, length: number, type: string) {
//       this.offset = offset;
//       this.length = length;
//       this.type = type;
//     }

//     getOffset() { return this.offset; }
//     setOffset(offset: number) { this.offset = offset; }
//     getLength() { return this.length; }
//     setLength(length: number) { this.length = length; }
//   }

//   export abstract class RegionLoadOperation extends RegionOperation {
//     private groupSize: number;
//     private skip: number;
//     private reverse: boolean;
//     private filename: string;

//     constructor(offset: number, length: number, groupSize: number, skip: number, reverse: boolean, filename: string) {
//       super(offset, length, 'load');
//       this.groupSize = groupSize;
//       this.skip = skip;
//       this.reverse = reverse;
//       this.filename = filename;
//     }

//     getGroupSize() { return this.groupSize; }
//     setGroupSize(groupSize: number) { this.groupSize = groupSize; }
//     getSkip() { return this.skip; }
//     setSkip(skip: number) { this.skip = skip; }
//     getIsReversed() { return this.reverse; }
//     setReverse(reverse: boolean) { this.reverse = reverse; }
//     getFilename() { return this.filename; }
//     setFilename(filename: string) { this.filename = filename; }
//   }

//   export class Load16WordSwap extends RegionLoadOperation {
//     constructor(filename: string, offset: number, length: number) {
//       super(offset, length, 2, 0, true, filename);
//     }
//   }

//   export class Load16Byte extends RegionLoadOperation {
//     constructor(filename: string, offset: number, length: number) {
//       super(offset, length, 1, 1, false, filename);
//     }
//   }

//   export class Load64Word extends RegionLoadOperation {
//     constructor(filename: string, offset: number, length: number) {
//       super(offset, length, 2, 6, false, filename);
//     }
//   }

//   export class Load64Byte extends RegionLoadOperation {
//     constructor(filename: string, offset: number, length: number) {
//       super(offset, length, 1, 7, false, filename);
//     }
//   }

//   export class Load extends RegionLoadOperation {
//     constructor(filename: string, offset: number, length: number) {
//       super(offset, length, 1, 0, false, filename);
//     }
//   }

//   export class Fill extends RegionOperation {
//     private _fillValue: number;

//     constructor(offset: number, length: number, fillValue: number) {
//       super(offset, length, 'fill');
//       this._fillValue = fillValue;
//     }

//     get fillValue() { return this._fillValue; }
//     set fillValue(_fillValue: number) { this._fillValue = _fillValue; }
//   }

//   export class Continue extends RegionOperation {
//     constructor(offset: number, length: number) {
//       super(offset, length, 'continue');
//     }
//   }

//   export interface Region {
//     size: number;
//     operations: RegionOperation[];
//   }

// }

export namespace Rom {

  export interface GenericRegionOperation {
    offset: number;
    length: number;
    type: string;
  }

  export interface RegionLoadOperation extends GenericRegionOperation {
    groupSize: number;
    skip: number;
    reverse: boolean;
    filename: string;
    type: 'load';
  }

  export interface Load16WordSwap extends RegionLoadOperation {
    groupSize: 2;
    skip: 0;
    reverse: true;
  }

  export interface Load16Byte extends RegionLoadOperation {
    groupSize: 1;
    skip: 1;
    reverse: false;
  }

  export interface Load64Word extends RegionLoadOperation {
    groupSize: 2;
    skip: 6;
    reverse: false,
  }

  export interface Load64Byte extends RegionLoadOperation {
    groupSize: 1;
    skip: 7;
    reverse: false;
  }

  export interface Load extends RegionLoadOperation {
    groupSize: 1;
    skip: 0;
    reverse: false;
  }

  export interface Fill extends GenericRegionOperation {
    fillValue: number;
    type: 'fill';
  }

  export interface Continue extends GenericRegionOperation {
    type: 'continue';
  }

  export type RegionOperation =  Load | Fill | Continue | RegionLoadOperation;

  export interface Region {
    size: number;
    operations: RegionOperation[];
  }

  export namespace Region {
    export namespace Operation {
      export enum Type {
        FILL = 'fill',
        CONTINUE = 'continue',
        LOAD = 'load',
      }
    }
    export enum Type {
      EXECUTABLE = 'maincpu',
      GRAPHICS = 'gfx',
      AUDIO_QSOUND = 'qsound',
      AUDIO_CPU = 'audiocpu',
      KEY = 'key',
    }
  }

}