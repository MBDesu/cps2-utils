import { Cps2RomDefinitions } from './cps2-rom/definition/cps2-rom-definition.js';

/**
 * ROM definitions for every CPS2 ROM. Defines by ROM region and what operations
 * are performed on those regions to build the ROM.
 */
export const roms: Cps2RomDefinitions = {
  '1944': {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nffe.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nffe.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nffe.05'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'nff.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nff.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nff.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '1944.key'
        }
      ]
    }
  },
  '1944u': {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nffu.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nff.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nffu.05'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'nff.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nff.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nff.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '1944u.key'
        }
      ]
    }
  },
  '1944j': {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nffj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nffj.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nffj.05'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'nff.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'nff.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nff.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'nff.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '1944j.key'
        }
      ]
    }
  },
  '19xx': {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xe.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xe.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xe.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xe.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.07'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.13m'
        },
        {
          offset: 2,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.15m'
        },
        {
          offset: 4,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.17m'
        },
        {
          offset: 6,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.19m'
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19x.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19xx.key'
        }
      ]
    }
  },
  '19xxu': {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xu.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xu.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xu.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xu.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.07'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.13m'
        },
        {
          offset: 2,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.15m'
        },
        {
          offset: 4,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.17m'
        },
        {
          offset: 6,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.19m'
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19x.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19xxu.key'
        }
      ]
    }
  },
  '19xxj': {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xj-03b.6a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xj-04b.7a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xj-05b.8a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xj-06b.9a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xj-07.6d'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-69.4j'
        },
        {
          offset: 2,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-59.4d'
        },
        {
          offset: 4,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-79.4m'
        },
        {
          offset: 6,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-89.4p'
        },
        {
          offset: 8388608,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-73.8j'
        },
        {
          offset: 10485760,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-74.9j'
        },
        {
          offset: 12582912,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-75.10j'
        },
        {
          offset: 14680064,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-76.11j'
        },
        {
          offset: 8388610,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-63.8d'
        },
        {
          offset: 10485762,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-64.9d'
        },
        {
          offset: 12582914,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-65.10d'
        },
        {
          offset: 14680066,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-66.11d'
        },
        {
          offset: 8388612,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-83.8m'
        },
        {
          offset: 10485764,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-84.9m'
        },
        {
          offset: 12582916,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-85.10m'
        },
        {
          offset: 14680068,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-86.11m'
        },
        {
          offset: 8388614,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-93.8p'
        },
        {
          offset: 10485766,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-94.9p'
        },
        {
          offset: 12582918,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-95.10p'
        },
        {
          offset: 14680070,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x-96.11p'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19x-01.1a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x-51.6a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x-52.7a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x-53.8a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x-54.9a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x-55.10a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x-56.11a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x-57.12a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x-58.13a'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19xxj.key'
        }
      ]
    }
  },
  '19xxjr1': {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xj.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xj.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xj.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.07'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.13m'
        },
        {
          offset: 2,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.15m'
        },
        {
          offset: 4,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.17m'
        },
        {
          offset: 6,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.19m'
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19x.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19xxj.key'
        }
      ]
    }
  },
  '19xxjr2': {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xj.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xj.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.07'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.13m'
        },
        {
          offset: 2,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.15m'
        },
        {
          offset: 4,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.17m'
        },
        {
          offset: 6,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.19m'
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19x.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19xxj.key'
        }
      ]
    }
  },
  '19xxa': {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '09xa.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '09xa.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '09xa.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '09xa.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xa.07'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.13m'
        },
        {
          offset: 2,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.15m'
        },
        {
          offset: 4,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.17m'
        },
        {
          offset: 6,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.19m'
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19x.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19xxa.key'
        }
      ]
    }
  },
  '19xxar1': {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xa.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xa.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xa.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xa.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.07'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.13m'
        },
        {
          offset: 2,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.15m'
        },
        {
          offset: 4,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.17m'
        },
        {
          offset: 6,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.19m'
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19x.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19xxa.key'
        }
      ]
    }
  },
  '19xxh': {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xh.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xh.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xh.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xh.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.07'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.13m'
        },
        {
          offset: 2,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.15m'
        },
        {
          offset: 4,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.17m'
        },
        {
          offset: 6,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.19m'
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19x.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19xxh.key'
        }
      ]
    }
  },
  '19xxb': {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xb.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xb.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xb.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19xb.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.07'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.13m'
        },
        {
          offset: 2,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.15m'
        },
        {
          offset: 4,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.17m'
        },
        {
          offset: 6,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.19m'
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: '19x.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19x.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: '19x.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '19xxb.key'
        }
      ]
    }
  },
  armwar: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwge.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwge.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwge.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.10'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'armwar.key'
        }
      ]
    }
  },
  armwarb: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgb.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgb.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgb.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.10'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'armwarb.key'
        }
      ]
    }
  },
  armwarr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwge.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwge.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwge.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.10'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'armwar.key'
        }
      ]
    }
  },
  armwaru: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgu.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgu.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgu.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.10'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'armwaru.key'
        }
      ]
    }
  },
  armwaru1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgu.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgu.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgu.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.10'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'armwaru.key'
        }
      ]
    }
  },
  pgear: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgj.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgj.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.10'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pgear.key'
        }
      ]
    }
  },
  pgearr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgj.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwgj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.10'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pgear.key'
        }
      ]
    }
  },
  armwara: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwga.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwga.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwga.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.10'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'armwara.key'
        }
      ]
    }
  },
  armwarar1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwga.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwga.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwga.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.10'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pwg.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pwg.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pwg.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'armwara.key'
        }
      ]
    }
  },
  avsp: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avpe.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avpe.04d'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.05d'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'avp.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'avsp.key'
        }
      ]
    }
  },
  avspu: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avpu.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avpu.04d'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.05d'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'avp.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'avspu.key'
        }
      ]
    }
  },
  avspj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avpj.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avpj.04d'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.05d'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'avp.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'avspj.key'
        }
      ]
    }
  },
  avspa: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avpa.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avpa.04d'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.05d'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'avp.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'avspa.key'
        }
      ]
    }
  },
  avsph: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avph.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avph.04d'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.05d'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'avp.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'avp.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'avp.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'avsph.key'
        }
      ]
    }
  },
  batcir: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btce.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btce.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btce.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btce.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.09'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'btc.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'btc.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'btc.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'btc.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'btc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'btc.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'batcir.key'
        }
      ]
    }
  },
  batcirj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btcj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btcj.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btcj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btcj.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.09'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'btc.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'btc.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'btc.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'btc.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'btc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'btc.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'batcirj.key'
        }
      ]
    }
  },
  batcira: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btca.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btca.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btca.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btca.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.09'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'btc.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'btc.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'btc.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'btc.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'btc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'btc.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'btc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'batcira.key'
        }
      ]
    }
  },
  choko: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'tkoj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'tkoj.04'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'tkoj1_d.simm1'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'tkoj1_c.simm1'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'tkoj1_b.simm1'
        },
        {
          offset: 3,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'tkoj1_a.simm1'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'tkoj3_d.simm3'
        },
        {
          offset: 5,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'tkoj3_c.simm3'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'tkoj3_b.simm3'
        },
        {
          offset: 7,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'tkoj3_a.simm3'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'tko.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 1,
          reverse: false,
          filename: 'tkoj5_a.simm5'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 1,
          reverse: false,
          filename: 'tkoj5_b.simm5'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'choko.key'
        }
      ]
    }
  },
  csclub: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csce.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csce.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csce.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csce.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csce.07a'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.73'
        },
        {
          offset: 10485760,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.74'
        },
        {
          offset: 12582912,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.75'
        },
        {
          offset: 14680064,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.76'
        },
        {
          offset: 8388610,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.63'
        },
        {
          offset: 10485762,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.64'
        },
        {
          offset: 12582914,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.65'
        },
        {
          offset: 14680066,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.66'
        },
        {
          offset: 8388612,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.83'
        },
        {
          offset: 10485764,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.84'
        },
        {
          offset: 12582916,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.85'
        },
        {
          offset: 14680068,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.86'
        },
        {
          offset: 8388614,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.93'
        },
        {
          offset: 10485766,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.94'
        },
        {
          offset: 12582918,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.95'
        },
        {
          offset: 14680070,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.96'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'csc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.51'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.52'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.53'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.54'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.55'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.56'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.57'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.58'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'csclub.key'
        }
      ]
    }
  },
  csclub1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csce.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csce.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csce.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csce.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.07'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'csc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'csclub.key'
        }
      ]
    }
  },
  csclubj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cscj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cscj.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cscj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cscj.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.07'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'csc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'csclubj.key'
        }
      ]
    }
  },
  csclubjy: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cscj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cscj.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cscj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cscj.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.07'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.73'
        },
        {
          offset: 10485760,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.74'
        },
        {
          offset: 12582912,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.75'
        },
        {
          offset: 14680064,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.76'
        },
        {
          offset: 8388610,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.63'
        },
        {
          offset: 10485762,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.64'
        },
        {
          offset: 12582914,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.65'
        },
        {
          offset: 14680066,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.66'
        },
        {
          offset: 8388612,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.83'
        },
        {
          offset: 10485764,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.84'
        },
        {
          offset: 12582916,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.85'
        },
        {
          offset: 14680068,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.86'
        },
        {
          offset: 8388614,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.93'
        },
        {
          offset: 10485766,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.94'
        },
        {
          offset: 12582918,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.95'
        },
        {
          offset: 14680070,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.96'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'csc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.51'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.52'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.53'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.54'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.55'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.56'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.57'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.58'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'csclubj.key'
        }
      ]
    }
  },
  cscluba: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csca.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csca.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csca.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csca.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.07'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'csc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'cscluba.key'
        }
      ]
    }
  },
  csclubh: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csch.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csch.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csch.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csch.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.07'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'csc.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'csc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'csc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'csclubh.key'
        }
      ]
    }
  },
  cybots: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cybe.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cybe.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'cyb.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'cyb.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'cybots.key'
        }
      ]
    }
  },
  cybotsu: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cybu.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cybu.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'cyb.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'cyb.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'cybotsu.key'
        }
      ]
    }
  },
  cybotsj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cybj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cybj.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'cyb.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'cyb.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'cyb.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'cyb.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'cybotsj.key'
        }
      ]
    }
  },
  ddtod: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dade.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dade.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dade.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.07a'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dad.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddtod.key'
        }
      ]
    }
  },
  ddtodr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dade.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dade.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dade.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dad.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddtod.key'
        }
      ]
    }
  },
  ddtodu: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadu.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadu.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadu.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dad.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddtodu.key'
        }
      ]
    }
  },
  ddtodur1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadu.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadu.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadu.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dad.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddtodu.key'
        }
      ]
    }
  },
  ddtodj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadj.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadj.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadj.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.07a'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dad.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddtodj.key'
        }
      ]
    }
  },
  ddtodjr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadj.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadj.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadj.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dad.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddtodj.key'
        }
      ]
    }
  },
  ddtodjr2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadj.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadj.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dad.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddtodj.key'
        }
      ]
    }
  },
  ddtoda: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dada.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dada.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dada.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.07a'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dad.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddtoda.key'
        }
      ]
    }
  },
  ddtodar1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dada.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dada.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dada.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dad.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddtoda.key'
        }
      ]
    }
  },
  ddtodh: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadh.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadh.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadh.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.07a'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dad.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddtodh.key'
        }
      ]
    }
  },
  ddtodhr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadh.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadh.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadh.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dad.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddtodh.key'
        }
      ]
    }
  },
  ddtodhr2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadh.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadh.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dadh.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dad.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dad.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dad.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddtodh.key'
        }
      ]
    }
  },
  ddsom: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.03e'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.04e'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.05e'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.06e'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.10'
        }
      ]
    },
    gfx: {
      size: 25165824,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.19m'
        },
        {
          offset: 16777216,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.14m'
        },
        {
          offset: 16777218,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.16m'
        },
        {
          offset: 16777220,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.18m'
        },
        {
          offset: 16777222,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddsom.key'
        }
      ]
    }
  },
  ddsomr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.04d'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.05d'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.06d'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.10'
        }
      ]
    },
    gfx: {
      size: 25165824,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.19m'
        },
        {
          offset: 16777216,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.14m'
        },
        {
          offset: 16777218,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.16m'
        },
        {
          offset: 16777220,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.18m'
        },
        {
          offset: 16777222,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddsom.key'
        }
      ]
    }
  },
  ddsomr2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.10'
        }
      ]
    },
    gfx: {
      size: 25165824,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.19m'
        },
        {
          offset: 16777216,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.14m'
        },
        {
          offset: 16777218,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.16m'
        },
        {
          offset: 16777220,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.18m'
        },
        {
          offset: 16777222,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddsom.key'
        }
      ]
    }
  },
  ddsomr3: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.10'
        }
      ]
    },
    gfx: {
      size: 25165824,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.19m'
        },
        {
          offset: 16777216,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.14m'
        },
        {
          offset: 16777218,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.16m'
        },
        {
          offset: 16777220,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.18m'
        },
        {
          offset: 16777222,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddsom.key'
        }
      ]
    }
  },
  ddsomu: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2u.03g'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2u.04g'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.05g'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.06g'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.10'
        }
      ]
    },
    gfx: {
      size: 25165824,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.19m'
        },
        {
          offset: 16777216,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.14m'
        },
        {
          offset: 16777218,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.16m'
        },
        {
          offset: 16777220,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.18m'
        },
        {
          offset: 16777222,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddsomu.key'
        }
      ]
    }
  },
  ddsomur1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2u.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2u.04d'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.05d'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.06d'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.10'
        }
      ]
    },
    gfx: {
      size: 25165824,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.19m'
        },
        {
          offset: 16777216,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.14m'
        },
        {
          offset: 16777218,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.16m'
        },
        {
          offset: 16777220,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.18m'
        },
        {
          offset: 16777222,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddsomu.key'
        }
      ]
    }
  },
  ddsomj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2j.03g'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2j.04g'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.05g'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.06g'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.10'
        }
      ]
    },
    gfx: {
      size: 25165824,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.19m'
        },
        {
          offset: 16777216,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.14m'
        },
        {
          offset: 16777218,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.16m'
        },
        {
          offset: 16777220,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.18m'
        },
        {
          offset: 16777222,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddsomj.key'
        }
      ]
    }
  },
  ddsomjr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2j.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2j.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.10'
        }
      ]
    },
    gfx: {
      size: 25165824,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.19m'
        },
        {
          offset: 16777216,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.14m'
        },
        {
          offset: 16777218,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.16m'
        },
        {
          offset: 16777220,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.18m'
        },
        {
          offset: 16777222,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddsomj.key'
        }
      ]
    }
  },
  ddsomjr2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2j.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2j.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.10'
        }
      ]
    },
    gfx: {
      size: 25165824,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.19m'
        },
        {
          offset: 16777216,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.14m'
        },
        {
          offset: 16777218,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.16m'
        },
        {
          offset: 16777220,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.18m'
        },
        {
          offset: 16777222,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddsomj.key'
        }
      ]
    }
  },
  ddsoma: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2a.03g'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2a.04g'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.05g'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.06g'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.10'
        }
      ]
    },
    gfx: {
      size: 25165824,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.19m'
        },
        {
          offset: 16777216,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.14m'
        },
        {
          offset: 16777218,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.16m'
        },
        {
          offset: 16777220,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.18m'
        },
        {
          offset: 16777222,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddsoma.key'
        }
      ]
    }
  },
  ddsomar1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2a.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2a.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2a.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2a.06c'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.10'
        }
      ]
    },
    gfx: {
      size: 25165824,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.19m'
        },
        {
          offset: 16777216,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.14m'
        },
        {
          offset: 16777218,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.16m'
        },
        {
          offset: 16777220,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.18m'
        },
        {
          offset: 16777222,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddsoma.key'
        }
      ]
    }
  },
  ddsomb: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2b.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2b.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2b.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2b.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2b.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.10'
        }
      ]
    },
    gfx: {
      size: 25165824,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.19m'
        },
        {
          offset: 16777216,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.14m'
        },
        {
          offset: 16777218,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.16m'
        },
        {
          offset: 16777220,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.18m'
        },
        {
          offset: 16777222,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddsomb.key'
        }
      ]
    }
  },
  ddsomh: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2h.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2h.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2h.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2h.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2h.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2e.10'
        }
      ]
    },
    gfx: {
      size: 25165824,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.19m'
        },
        {
          offset: 16777216,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.14m'
        },
        {
          offset: 16777218,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.16m'
        },
        {
          offset: 16777220,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.18m'
        },
        {
          offset: 16777222,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'dd2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dd2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'dd2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ddsomh.key'
        }
      ]
    }
  },
  dimahoo: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmde.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'gmd.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'gmd.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'gmd.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'gmd.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'gmd.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'gmd.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dimahoo.key'
        }
      ]
    }
  },
  dimahoou: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmdu.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'gmd.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'gmd.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'gmd.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'gmd.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'gmd.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'gmd.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dimahoou.key'
        }
      ]
    }
  },
  gmahou: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmdj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'gmd.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'gmd.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'gmd.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'gmd.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'gmd.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'gmd.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'gmd.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'gmahou.key'
        }
      ]
    }
  },
  dstlk: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vame.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vame.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vame.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vame.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vame.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vame.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vame.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vame.10a'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dstlk.key'
        }
      ]
    }
  },
  dstlku: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.08b'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.10b'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dstlku.key'
        }
      ]
    }
  },
  dstlkur1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamu.10a'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dstlku.key'
        }
      ]
    }
  },
  vampj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.10a'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vampj.key'
        }
      ]
    }
  },
  vampja: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.10a'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vampj.key'
        }
      ]
    }
  },
  vampjr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamj.10'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vampj.key'
        }
      ]
    }
  },
  dstlka: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vama.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vama.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vama.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vama.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vama.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vama.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vama.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vama.10a'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dstlka.key'
        }
      ]
    }
  },
  dstlkh: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamh.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamh.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamh.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamh.06c'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamh.07c'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamh.08c'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamh.09c'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vamh.10c'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vam.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vam.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vam.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'dstlkh.key'
        }
      ]
    }
  },
  ecofghtr: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uece.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uece.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uece.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uece.06'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'uec.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uec.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uec.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ecofghtr.key'
        }
      ]
    }
  },
  ecofghtru: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uecu.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uecu.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uecu.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uecu.06a'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'uec.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uec.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uec.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ecofghtru.key'
        }
      ]
    }
  },
  ecofghtru1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uecu.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uecu.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uecu.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uecu.06'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'uec.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uec.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uec.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ecofghtru.key'
        }
      ]
    }
  },
  uecology: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uecj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uecj.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uecj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uecj.06'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'uec.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uec.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uec.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'uecology.key'
        }
      ]
    }
  },
  ecofghtra: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ueca.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ueca.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ueca.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ueca.06'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'uec.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uec.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uec.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ecofghtra.key'
        }
      ]
    }
  },
  ecofghtrh: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uech.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uech.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uech.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uech.06'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'uec.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'uec.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uec.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'uec.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ecofghtrh.key'
        }
      ]
    }
  },
  gigawing: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggwu.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggwu.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggw.05'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ggw.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggw.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggw.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'gigawing.key'
        }
      ]
    }
  },
  gigawingj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggwj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggwj.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggwj.05a'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ggw.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggw.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggw.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'gigawingj.key'
        }
      ]
    }
  },
  gigawinga: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggwa.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggwa.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggwa.05a'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ggw.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggw.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggw.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'gigawinga.key'
        }
      ]
    }
  },
  gigawingh: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggwh.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggwh.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggw.05'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ggw.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggw.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggw.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'gigawingh.key'
        }
      ]
    }
  },
  gigawingb: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggwb.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggwb.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggw.05'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ggw.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ggw.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggw.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ggw.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'gigawingb.key'
        }
      ]
    }
  },
  hsf2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2u.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2u.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.13m'
        },
        {
          offset: 2,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.15m'
        },
        {
          offset: 4,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.17m'
        },
        {
          offset: 6,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'hs2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'hs2.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.11m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'hsf2.key'
        }
      ]
    }
  },
  hsf2a: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2a.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2a.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.13m'
        },
        {
          offset: 2,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.15m'
        },
        {
          offset: 4,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.17m'
        },
        {
          offset: 6,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'hs2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'hs2.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.11m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'hsf2a.key'
        }
      ]
    }
  },
  hsf2j: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2j.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2j.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2j.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2j.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2j.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2j.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2j.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2j.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.13m'
        },
        {
          offset: 2,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.15m'
        },
        {
          offset: 4,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.17m'
        },
        {
          offset: 6,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'hs2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'hs2.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.11m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'hsf2j.key'
        }
      ]
    }
  },
  hsf2j1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2j.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2j.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.13m'
        },
        {
          offset: 2,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.15m'
        },
        {
          offset: 4,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.17m'
        },
        {
          offset: 6,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'hs2.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'hs2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'hs2.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'hs2.11m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'hsf2j.key'
        }
      ]
    }
  },
  jyangoku: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'majj.03'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'maj1_d.simm1'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'maj1_c.simm1'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'maj1_b.simm1'
        },
        {
          offset: 3,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'maj1_a.simm1'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'maj3_d.simm3'
        },
        {
          offset: 5,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'maj3_c.simm3'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'maj3_b.simm3'
        },
        {
          offset: 7,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'maj3_a.simm3'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'maj.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 1,
          reverse: false,
          filename: 'maj5_a.simm5'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 1,
          reverse: false,
          filename: 'maj5_b.simm5'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'jyangoku.key'
        }
      ]
    }
  },
  megaman2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2u.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2u.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2.05'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'rm2.01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'rm2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'megaman2.key'
        }
      ]
    }
  },
  megaman2a: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2a.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2a.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2.05'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'rm2.01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'rm2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'megaman2a.key'
        }
      ]
    }
  },
  rockman2j: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2j.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2j.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2.05'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'rm2.01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'rm2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'rockman2j.key'
        }
      ]
    }
  },
  megaman2h: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2h.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2h.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2.05'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rm2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'rm2.01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'rm2.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rm2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'megaman2h.key'
        }
      ]
    }
  },
  gigaman2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sys_rom1.bin'
        }
      ]
    },
    mcu: {
      size: 65536,
      operations: [
        {
          offset: 0,
          length: 65536,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: '89c4051.bin'
        }
      ]
    },
    gfx: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'cg_rom1.bin'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'cg_rom2.bin'
        }
      ]
    },
    oki: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pcm_rom1.bin'
        }
      ]
    }
  },
  mmatrix: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmxu.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmxu.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmxu.05'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mmx.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmx.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmx.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mmatrix.key'
        }
      ]
    }
  },
  mmatrixa: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmxa.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmxa.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmxa.05'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mmx.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmx.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmx.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mmatrixa.key'
        }
      ]
    }
  },
  mmatrixj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmxj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmxj.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmxj.05'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mmx.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mmx.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmx.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mmx.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mmatrixj.key'
        }
      ]
    }
  },
  msh: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mshe.03e'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mshe.04e'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.key'
        }
      ]
    }
  },
  mshu: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mshu.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mshu.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshu.key'
        }
      ]
    }
  },
  mshj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mshj.03g'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mshj.04g'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshj.key'
        }
      ]
    }
  },
  mshjr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mshj.03f'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mshj.04f'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshj.key'
        }
      ]
    }
  },
  msha: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msha.03e'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msha.04e'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msha.key'
        }
      ]
    }
  },
  mshh: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mshh.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mshh.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshh.key'
        }
      ]
    }
  },
  mshb: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mshb.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mshb.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshb.key'
        }
      ]
    }
  },
  mshbr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mshb.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mshb.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'msh.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'msh.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'msh.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshb.key'
        }
      ]
    }
  },
  mshvsf: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvse.03f'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvse.04f'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshvsf.key'
        }
      ]
    }
  },
  mshvsfu: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsu.03g'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsu.04g'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.05d'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshvsfu.key'
        }
      ]
    }
  },
  mshvsfu1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsu.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsu.04d'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshvsfu.key'
        }
      ]
    }
  },
  mshvsfj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsj.03i'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsj.04i'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.05h'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshvsfj.key'
        }
      ]
    }
  },
  mshvsfj1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsj.03h'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsj.04h'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.05g'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshvsfj.key'
        }
      ]
    }
  },
  mshvsfj2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsj.03g'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsj.04g'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshvsfj.key'
        }
      ]
    }
  },
  mshvsfh: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsh.03f'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsh.04f'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshvsfh.key'
        }
      ]
    }
  },
  mshvsfa: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsa.03f'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsa.04f'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshvsfa.key'
        }
      ]
    }
  },
  mshvsfa1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsa.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsa.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshvsfa.key'
        }
      ]
    }
  },
  mshvsfb: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsb.03g'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsb.04g'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.05d'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshvsfb.key'
        }
      ]
    }
  },
  mshvsfb1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsb.03f'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvsb.04f'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvs.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvs.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvs.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mshvsfb.key'
        }
      ]
    }
  },
  mvsc: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvce.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvce.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvsc.key'
        }
      ]
    }
  },
  mvscr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvce.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvce.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvsc.key'
        }
      ]
    }
  },
  mvscu: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvcu.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvcu.04d'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvscu.key'
        }
      ]
    }
  },
  mvscur1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvcu.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvcu.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvcu.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvcu.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvcu.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvcu.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvscu.key'
        }
      ]
    }
  },
  mvscj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvcj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvcj.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvscj.key'
        }
      ]
    }
  },
  mvscjr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvcj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvcj.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvscj.key'
        }
      ]
    }
  },
  mvscjsing: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 1,
          reverse: false,
          filename: 'mvc_ja.simm1'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 1,
          reverse: false,
          filename: 'mvc_ja.simm3'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc64-13m.13'
        },
        {
          offset: 2,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc64-15m.15'
        },
        {
          offset: 4,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc64-17m.17'
        },
        {
          offset: 6,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc64-19m.19'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc64-11m.11'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvscj.key'
        }
      ]
    }
  },
  mvsca: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvca.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvca.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvsca.key'
        }
      ]
    }
  },
  mvscar1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvca.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvca.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvsca.key'
        }
      ]
    }
  },
  mvsch: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvch.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvch.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvsch.key'
        }
      ]
    }
  },
  mvscb: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvcb.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvcb.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mvc.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvc.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mvc.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mvscb.key'
        }
      ]
    }
  },
  mpang: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpne.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpne.04c'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01c'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01d'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01a'
        },
        {
          offset: 3,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01b'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03c'
        },
        {
          offset: 5,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03d'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03a'
        },
        {
          offset: 7,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03b'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mpn.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpn-simm.05a'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpn-simm.05b'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mpang.key'
        }
      ]
    }
  },
  mpangr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpne.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpne.04b'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01c'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01d'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01a'
        },
        {
          offset: 3,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01b'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03c'
        },
        {
          offset: 5,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03d'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03a'
        },
        {
          offset: 7,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03b'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mpn.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpn-simm.05a'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpn-simm.05b'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mpang.key'
        }
      ]
    }
  },
  mpangu: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpnu.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpnu.04'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mpn.13m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mpn.15m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mpn.17m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'mpn.19m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mpn.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 1048576,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mpn.q1'
        },
        {
          offset: 1048576,
          length: 1048576,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mpn.q2'
        },
        {
          offset: 2097152,
          length: 1048576,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mpn.q3'
        },
        {
          offset: 3145728,
          length: 1048576,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mpn.q4'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mpang.key'
        }
      ]
    }
  },
  mpangj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpnj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpnj.04a'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01c'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01d'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01a'
        },
        {
          offset: 3,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01b'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03c'
        },
        {
          offset: 5,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03d'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03a'
        },
        {
          offset: 7,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03b'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mpn.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpn-simm.05a'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpn-simm.05b'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mpang.key'
        }
      ]
    }
  },
  mpanga: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpn_03a.6a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpn_04a.7a'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01c'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01d'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01a'
        },
        {
          offset: 3,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.01b'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03c'
        },
        {
          offset: 5,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03d'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03a'
        },
        {
          offset: 7,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'mpn-simm.03b'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mpn.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpn-simm.05a'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'mpn-simm.05b'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mpang.key'
        }
      ]
    }
  },
  nwarr: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphe.03f'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphe.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphe.05d'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphe.06c'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphe.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphe.08b'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphe.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphe.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'nwarr.key'
        }
      ]
    }
  },
  nwarru: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphu.03f'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphu.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphu.05e'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphu.06c'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphu.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphu.08b'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphu.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphu.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'nwarru.key'
        }
      ]
    }
  },
  nwarrh: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphh.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphh.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphh.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphh.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphh.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphh.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphh.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphh.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'nwarrh.key'
        }
      ]
    }
  },
  nwarrb: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphb.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphb.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphb.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphb.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphb.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphb.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphb.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphb.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'nwarrb.key'
        }
      ]
    }
  },
  nwarra: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vpha.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vpha.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vpha.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vpha.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vpha.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vpha.08b'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vpha.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vpha.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'nwarra.key'
        }
      ]
    }
  },
  vhuntj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.03f'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.05d'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.06c'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.08b'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vhuntj.key'
        }
      ]
    }
  },
  vhuntjr1s: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphjstop.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.05d'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.06c'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.08b'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vhuntj.key'
        }
      ]
    }
  },
  vhuntjr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.08b'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vhuntj.key'
        }
      ]
    }
  },
  vhuntjr2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vphj.10a'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vph.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vph.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vph.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vhuntj.key'
        }
      ]
    }
  },
  progear: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pgau.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pgau.04'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.01c'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.01d'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.01a'
        },
        {
          offset: 3,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.01b'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.03c'
        },
        {
          offset: 5,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.03d'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.03a'
        },
        {
          offset: 7,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.03b'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pga.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pga-simm.05a'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pga-simm.05b'
        },
        {
          offset: 4194304,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pga-simm.06a'
        },
        {
          offset: 6291456,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pga-simm.06b'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'progear.key'
        }
      ]
    }
  },
  progearj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pgaj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pgaj.04'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.01c'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.01d'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.01a'
        },
        {
          offset: 3,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.01b'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.03c'
        },
        {
          offset: 5,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.03d'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.03a'
        },
        {
          offset: 7,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.03b'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pga.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pga-simm.05a'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pga-simm.05b'
        },
        {
          offset: 4194304,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pga-simm.06a'
        },
        {
          offset: 6291456,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pga-simm.06b'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'progearj.key'
        }
      ]
    }
  },
  progeara: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pgaa.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pgaa.04'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.01c'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.01d'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.01a'
        },
        {
          offset: 3,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.01b'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.03c'
        },
        {
          offset: 5,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.03d'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.03a'
        },
        {
          offset: 7,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pga-simm.03b'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pga.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pga-simm.05a'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pga-simm.05b'
        },
        {
          offset: 4194304,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pga-simm.06a'
        },
        {
          offset: 6291456,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pga-simm.06b'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'progeara.key'
        }
      ]
    }
  },
  pzloop2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2e.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2e.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2e.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2e.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.01c'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.01d'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.01a'
        },
        {
          offset: 3,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.01b'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.03c'
        },
        {
          offset: 5,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.03d'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.03a'
        },
        {
          offset: 7,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.03b'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pl2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2-simm.05a'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2-simm.05b'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pzloop2.key'
        }
      ]
    }
  },
  pzloop2j: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2j.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2j.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2j.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2j.06c'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.01c'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.01d'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.01a'
        },
        {
          offset: 3,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.01b'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.03c'
        },
        {
          offset: 5,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.03d'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.03a'
        },
        {
          offset: 7,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.03b'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pl2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2-simm.05a'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2-simm.05b'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pzloop2.key'
        }
      ]
    }
  },
  pzloop2jr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2j.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2j.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2j.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2j.06a'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.01c'
        },
        {
          offset: 1,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.01d'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.01a'
        },
        {
          offset: 3,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.01b'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.03c'
        },
        {
          offset: 5,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.03d'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.03a'
        },
        {
          offset: 7,
          length: 2097152,
          type: 'load',
          groupSize: 1,
          skip: 7,
          reverse: false,
          filename: 'pl2-simm.03b'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pl2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2-simm.05a'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pl2-simm.05b'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pzloop2.key'
        }
      ]
    }
  },
  qndream: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'tqzj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'tqzj.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'tqzj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'tqzj.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'tqz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'tqz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'tqz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'tqz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'tqz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'tqz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'tqz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'qndream.key'
        }
      ]
    }
  },
  ringdest: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbe.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbe.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbe.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbe.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.08'
        }
      ]
    },
    gfx: {
      size: 18874368,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.19m'
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.20m'
        },
        {
          offset: 16777216,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.21m'
        },
        {
          offset: 16777218,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.23m'
        },
        {
          offset: 16777220,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.25m'
        },
        {
          offset: 16777222,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.27m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'smb.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'smb.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ringdest.key'
        }
      ]
    }
  },
  smbomb: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbj.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbj.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbj.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.08'
        }
      ]
    },
    gfx: {
      size: 18874368,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.19m'
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.20m'
        },
        {
          offset: 16777216,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.21m'
        },
        {
          offset: 16777218,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.23m'
        },
        {
          offset: 16777220,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.25m'
        },
        {
          offset: 16777222,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.27m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'smb.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'smb.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'smbomb.key'
        }
      ]
    }
  },
  smbombr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbj.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbj.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.08'
        }
      ]
    },
    gfx: {
      size: 18874368,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.19m'
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.20m'
        },
        {
          offset: 16777216,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.21m'
        },
        {
          offset: 16777218,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.23m'
        },
        {
          offset: 16777220,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.25m'
        },
        {
          offset: 16777222,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.27m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'smb.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'smb.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'smbomb.key'
        }
      ]
    }
  },
  ringdesta: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smba.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smba.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smba.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smba.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.08'
        }
      ]
    },
    gfx: {
      size: 18874368,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.19m'
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.20m'
        },
        {
          offset: 16777216,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.21m'
        },
        {
          offset: 16777218,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.23m'
        },
        {
          offset: 16777220,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.25m'
        },
        {
          offset: 16777222,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.27m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'smb.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'smb.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ringdesta.key'
        }
      ]
    }
  },
  ringdesth: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbh.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbh.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbh.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbh.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbh.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbh.08b'
        }
      ]
    },
    gfx: {
      size: 18874368,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.19m'
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.20m'
        },
        {
          offset: 16777216,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.21m'
        },
        {
          offset: 16777218,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.23m'
        },
        {
          offset: 16777220,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.25m'
        },
        {
          offset: 16777222,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.27m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'smb.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'smb.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ringdesth.key'
        }
      ]
    }
  },
  ringdestb: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbb.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbb.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbb.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbb.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbb.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smbb.08b'
        }
      ]
    },
    gfx: {
      size: 18874368,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.19m'
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.20m'
        },
        {
          offset: 16777216,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.21m'
        },
        {
          offset: 16777218,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.23m'
        },
        {
          offset: 16777220,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.25m'
        },
        {
          offset: 16777222,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'smb.27m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'smb.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'smb.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'smb.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ringdesth.key'
        }
      ]
    }
  },
  mmancp2u: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcmu.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcmu.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.05b'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.73'
        },
        {
          offset: 8388610,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.63'
        },
        {
          offset: 8388612,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.83'
        },
        {
          offset: 8388614,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.93'
        },
        {
          offset: 10485760,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.74'
        },
        {
          offset: 10485762,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.64'
        },
        {
          offset: 10485764,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.84'
        },
        {
          offset: 10485766,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.94'
        },
        {
          offset: 12582912,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.75'
        },
        {
          offset: 12582914,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.65'
        },
        {
          offset: 12582916,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.85'
        },
        {
          offset: 12582918,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.95'
        },
        {
          offset: 14680064,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.76'
        },
        {
          offset: 14680066,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.66'
        },
        {
          offset: 14680068,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.86'
        },
        {
          offset: 14680070,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.96'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'rcm.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.51'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.52'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.53'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.54'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.55'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.56'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.57'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.58'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mmancp2u.key'
        }
      ]
    }
  },
  mmancp2ur1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcmu.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcmu.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcmu.05a'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.73'
        },
        {
          offset: 8388610,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.63'
        },
        {
          offset: 8388612,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.83'
        },
        {
          offset: 8388614,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.93'
        },
        {
          offset: 10485760,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.74'
        },
        {
          offset: 10485762,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.64'
        },
        {
          offset: 10485764,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.84'
        },
        {
          offset: 10485766,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.94'
        },
        {
          offset: 12582912,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.75'
        },
        {
          offset: 12582914,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.65'
        },
        {
          offset: 12582916,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.85'
        },
        {
          offset: 12582918,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.95'
        },
        {
          offset: 14680064,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.76'
        },
        {
          offset: 14680066,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.66'
        },
        {
          offset: 14680068,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.86'
        },
        {
          offset: 14680070,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.96'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'rcm.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.51'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.52'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.53'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.54'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.55'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.56'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.57'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.58'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mmancp2u.key'
        }
      ]
    }
  },
  mmancp2ur2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcmu.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcmu.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcmu.05'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.73'
        },
        {
          offset: 8388610,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.63'
        },
        {
          offset: 8388612,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.83'
        },
        {
          offset: 8388614,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.93'
        },
        {
          offset: 10485760,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.74'
        },
        {
          offset: 10485762,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.64'
        },
        {
          offset: 10485764,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.84'
        },
        {
          offset: 10485766,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.94'
        },
        {
          offset: 12582912,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.75'
        },
        {
          offset: 12582914,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.65'
        },
        {
          offset: 12582916,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.85'
        },
        {
          offset: 12582918,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.95'
        },
        {
          offset: 14680064,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.76'
        },
        {
          offset: 14680066,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.66'
        },
        {
          offset: 14680068,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.86'
        },
        {
          offset: 14680070,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.96'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'rcm.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.51'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.52'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.53'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.54'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.55'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.56'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.57'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.58'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'mmancp2u.key'
        }
      ]
    }
  },
  rmancp2j: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcmj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcmj.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.05a'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.73'
        },
        {
          offset: 8388610,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.63'
        },
        {
          offset: 8388612,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.83'
        },
        {
          offset: 8388614,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.93'
        },
        {
          offset: 10485760,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.74'
        },
        {
          offset: 10485762,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.64'
        },
        {
          offset: 10485764,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.84'
        },
        {
          offset: 10485766,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.94'
        },
        {
          offset: 12582912,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.75'
        },
        {
          offset: 12582914,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.65'
        },
        {
          offset: 12582916,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.85'
        },
        {
          offset: 12582918,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.95'
        },
        {
          offset: 14680064,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.76'
        },
        {
          offset: 14680066,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.66'
        },
        {
          offset: 14680068,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.86'
        },
        {
          offset: 14680070,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'rcm.96'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'rcm.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.51'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.52'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.53'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.54'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.55'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.56'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.57'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'rcm.58'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'rmancp2j.key'
        }
      ]
    }
  },
  sfa: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfze.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfa.key'
        }
      ]
    }
  },
  sfar1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfze.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfze.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfa.key'
        }
      ]
    }
  },
  sfar2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfze.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfa.key'
        }
      ]
    }
  },
  sfar3: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfze.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfa.key'
        }
      ]
    }
  },
  sfau: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfzu.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfau.key'
        }
      ]
    }
  },
  sfza: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfza.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfza.key'
        }
      ]
    }
  },
  sfzar1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfza.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfza.key'
        }
      ]
    }
  },
  sfzj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfzj.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfzj.key'
        }
      ]
    }
  },
  sfzjr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfzj.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfzj.key'
        }
      ]
    }
  },
  sfzjr2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfzj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfzj.key'
        }
      ]
    }
  },
  sfzh: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfzh.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfzh.key'
        }
      ]
    }
  },
  sfzhr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfzh.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfzh.key'
        }
      ]
    }
  },
  sfzb: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfzb.03g'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfzb.04e'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfzb.key'
        }
      ]
    }
  },
  sfzbr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfzb.03e'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.06'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.14m'
        },
        {
          offset: 8388610,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.16m'
        },
        {
          offset: 8388612,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.18m'
        },
        {
          offset: 8388614,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfz.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfz.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfzb.key'
        }
      ]
    }
  },
  sfa2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2e.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2e.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.08'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.02a'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfa2.key'
        }
      ]
    }
  },
  sfa2u: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2u.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2u.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2u.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2u.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2u.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2u.08'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.02a'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfa2u.key'
        }
      ]
    }
  },
  sfa2ur1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2u.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2u.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2u.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2u.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2u.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2u.08'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.02a'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfa2u.key'
        }
      ]
    }
  },
  sfz2j: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2j.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2j.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2j.05b'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2j.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2j.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2j.08b'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.02a'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz2j.key'
        }
      ]
    }
  },
  sfz2jr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2j.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2j.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2j.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.08'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.02a'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz2j.key'
        }
      ]
    }
  },
  sfz2a: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2a.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2a.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2a.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.08'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.02a'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz2a.key'
        }
      ]
    }
  },
  sfz2b: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2b.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2b.04b'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2b.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2b.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2b.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2b.08'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.02a'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz2b.key'
        }
      ]
    }
  },
  sfz2br1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2b.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2b.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2b.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2b.08'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.02a'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz2b.key'
        }
      ]
    }
  },
  sfz2h: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2h.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2h.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2h.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2h.08'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.02a'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz2h.key'
        }
      ]
    }
  },
  sfz2n: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2n.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2n.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.08'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz2.02a'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz2n.key'
        }
      ]
    }
  },
  sfz2al: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaa.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaa.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaa.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaa.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaa.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaa.08'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sza.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sza.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz2al.key'
        }
      ]
    }
  },
  sfz2alr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaa.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaa.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaa.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaa.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaa.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaa.08a'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sza.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sza.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz2al.key'
        }
      ]
    }
  },
  sfz2alj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaj.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaj.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaj.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaj.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szaj.08a'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sza.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sza.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz2alj.key'
        }
      ]
    }
  },
  sfz2alh: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szah.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szah.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szah.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.08'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sza.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sza.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz2alh.key'
        }
      ]
    }
  },
  sfz2alb: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szab.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szab.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'szab.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.08'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sza.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sza.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sza.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sza.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz2alb.key'
        }
      ]
    }
  },
  sfa3: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3e.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3e.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.06c'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.07c'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.08c'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.09c'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfa3.key'
        }
      ]
    }
  },
  sfa3u: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3u.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3u.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.06c'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.07c'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.08c'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.09c'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfa3u.key'
        }
      ]
    }
  },
  sfa3ur1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3u.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3u.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfa3u.key'
        }
      ]
    }
  },
  sfa3us: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3-usam_03.6a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3-usam_04.7a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3-usam_05.8a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3-usam_06.9a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3-usam_07.6d'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3-usam_08.7d'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3-usam_09.8d'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3-usam_10.9d'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3-usam_01.1a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3-usam_02.2a'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfa3u.key'
        }
      ]
    }
  },
  sfz3j: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3j.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3j.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.06c'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.07c'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.08c'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.09c'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz3j.key'
        }
      ]
    }
  },
  sfz3jr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3j.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3j.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.09a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz3j.key'
        }
      ]
    }
  },
  sfz3jr2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3j.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3j.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz3j.key'
        }
      ]
    }
  },
  sfz3a: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3a.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3a.04d'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.06c'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.07c'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.08c'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.09c'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz3a.key'
        }
      ]
    }
  },
  sfz3ar1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3a.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3a.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfz3a.key'
        }
      ]
    }
  },
  sfa3h: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3h.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3h.04c'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.05c'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.06c'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.07c'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.08c'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.09c'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfa3h.key'
        }
      ]
    }
  },
  sfa3hr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3h.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3h.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfa3h.key'
        }
      ]
    }
  },
  sfa3b: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3b.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3b.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sz3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sz3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sz3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfa3b.key'
        }
      ]
    }
  },
  sgemf: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcfu.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.07'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pcf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pcf.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sgemf.key'
        }
      ]
    }
  },
  pfghtj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcfj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.07'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pcf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pcf.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pfghtj.key'
        }
      ]
    }
  },
  sgemfa: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcfa.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.07'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pcf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pcf.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sgemfa.key'
        }
      ]
    }
  },
  sgemfh: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcfh.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.07'
        }
      ]
    },
    gfx: {
      size: 20971520,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.19m'
        },
        {
          offset: 16777216,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.14m'
        },
        {
          offset: 16777218,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.16m'
        },
        {
          offset: 16777220,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.18m'
        },
        {
          offset: 16777222,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pcf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pcf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pcf.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pcf.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sgemfh.key'
        }
      ]
    }
  },
  spf2t: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzfe.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.04'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pzf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pzf.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'spf2t.key'
        }
      ]
    }
  },
  spf2tu: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzfu.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.04'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pzf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pzf.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'spf2tu.key'
        }
      ]
    }
  },
  spf2xj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzfj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.04'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pzf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pzf.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'spf2xj.key'
        }
      ]
    }
  },
  spf2ta: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzfa.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.04'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pzf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pzf.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'spf2ta.key'
        }
      ]
    }
  },
  spf2th: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzfh.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.04'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 8388608,
          type: 'fill',
          fillValue: 0
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'pzf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pzf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'pzf.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'pzf.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'spf2th.key'
        }
      ]
    }
  },
  ssf2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe-03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe-06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf-01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2.key'
        }
      ]
    }
  },
  ssf2r1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2.key'
        }
      ]
    }
  },
  ssf2u: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfu.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfu.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfu.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfu.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfu.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2u.key'
        }
      ]
    }
  },
  ssf2us2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfu.03a'
        },
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'superstf2superiirom-08usa'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfu.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfu.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfu.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'superstf2superiirom-07usa'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    plds: {
      size: 279,
      operations: [
        {
          offset: 0,
          length: 279,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'gal_1_super2.bin'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2u.key'
        }
      ]
    }
  },
  ssf2a: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2a.key'
        }
      ]
    }
  },
  ssf2ar1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2a.key'
        }
      ]
    }
  },
  ssf2j: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2j.key'
        }
      ]
    }
  },
  ssf2jr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2j.key'
        }
      ]
    }
  },
  ssf2jr2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2j.key'
        }
      ]
    }
  },
  ssf2h: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfh.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfh.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfh.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfh.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfh.07'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2h.key'
        }
      ]
    }
  },
  ssf2tb: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.03tc'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.04tc'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.05t'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.06tb'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.07t'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2tb.key'
        }
      ]
    }
  },
  ssf2tbr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.03t'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.04t'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.05t'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.06t'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfe.07t'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2tb.key'
        }
      ]
    }
  },
  ssf2tbu: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfu.03t'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfu.04t'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfu.05t'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfu.06t'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfu.07t'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2tbu.key'
        }
      ]
    }
  },
  ssf2tbj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssftj.03b'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssftj.04t'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssftj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.06tb'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.07t'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2tbj.key'
        }
      ]
    }
  },
  ssf2tbj1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.03t'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.04t'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.05t'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.06t'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfj.07t'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2tbj.key'
        }
      ]
    }
  },
  ssf2tba: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.03tb'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.04ta'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.05t'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.06tb'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfa.07t'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf-01a'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2tba.key'
        }
      ]
    }
  },
  ssf2tbh: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfh.03tb'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfh.04t'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfh.05t'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfh.06tb'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssfh.07t'
        }
      ]
    },
    gfx: {
      size: 12582912,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q01'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q02'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q03'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q04'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q05'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q06'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q07'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf.q08'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2tbh.key'
        }
      ]
    }
  },
  ssf2t: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxe.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxe.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxe.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxe.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxe.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxe.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.09'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.20m'
        },
        {
          offset: 12582912,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.21m'
        },
        {
          offset: 12582914,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.23m'
        },
        {
          offset: 12582916,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.25m'
        },
        {
          offset: 12582918,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.27m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2t.key'
        }
      ]
    }
  },
  ssf2tu: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxu.03e'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxu.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxu.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxu.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxu.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxu.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.09'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.20m'
        },
        {
          offset: 12582912,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.21m'
        },
        {
          offset: 12582914,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.23m'
        },
        {
          offset: 12582916,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.25m'
        },
        {
          offset: 12582918,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.27m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2tu.key'
        }
      ]
    }
  },
  ssf2tur1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxu.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxu.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxu.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxu.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxu.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxu.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.09'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.20m'
        },
        {
          offset: 12582912,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.21m'
        },
        {
          offset: 12582914,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.23m'
        },
        {
          offset: 12582916,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.25m'
        },
        {
          offset: 12582918,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.27m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2tu.key'
        }
      ]
    }
  },
  ssf2ta: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxa.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxa.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxa.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxa.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxa.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxa.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.09'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.20m'
        },
        {
          offset: 12582912,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.21m'
        },
        {
          offset: 12582914,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.23m'
        },
        {
          offset: 12582916,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.25m'
        },
        {
          offset: 12582918,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.27m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2ta.key'
        }
      ]
    }
  },
  ssf2th: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxh.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxh.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxh.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxh.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxh.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxh.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxh.09'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.20m'
        },
        {
          offset: 12582912,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.21m'
        },
        {
          offset: 12582914,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.23m'
        },
        {
          offset: 12582916,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.25m'
        },
        {
          offset: 12582918,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.27m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2th.key'
        }
      ]
    }
  },
  ssf2xj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxj.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxj.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxj.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxj.07a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxj.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.09'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.20m'
        },
        {
          offset: 12582912,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.21m'
        },
        {
          offset: 12582914,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.23m'
        },
        {
          offset: 12582916,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.25m'
        },
        {
          offset: 12582918,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.27m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2xj.key'
        }
      ]
    }
  },
  ssf2xjr1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxj.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxj.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxj.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxj.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxj.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxj.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.09'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.13m'
        },
        {
          offset: 2,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.15m'
        },
        {
          offset: 4,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.17m'
        },
        {
          offset: 6,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.19m'
        },
        {
          offset: 8388608,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.14m'
        },
        {
          offset: 8388610,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.16m'
        },
        {
          offset: 8388612,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.18m'
        },
        {
          offset: 8388614,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.20m'
        },
        {
          offset: 12582912,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.21m'
        },
        {
          offset: 12582914,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.23m'
        },
        {
          offset: 12582916,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.25m'
        },
        {
          offset: 12582918,
          length: 1048576,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.27m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.11m'
        },
        {
          offset: 2097152,
          length: 2097152,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfx.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2xj.key'
        }
      ]
    }
  },
  ssf2xjr1r: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxo.03c'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxo.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxo.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxo.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxo.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxo.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'sfxo.09'
        }
      ]
    },
    gfx: {
      size: 16777216,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.69'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.70'
        },
        {
          offset: 4194304,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.71'
        },
        {
          offset: 6291456,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.72'
        },
        {
          offset: 8388608,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.73'
        },
        {
          offset: 10485760,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.74'
        },
        {
          offset: 12582912,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.75'
        },
        {
          offset: 14680064,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.76'
        },
        {
          offset: 2,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.59'
        },
        {
          offset: 2097154,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.60'
        },
        {
          offset: 4194306,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.61'
        },
        {
          offset: 6291458,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.62'
        },
        {
          offset: 8388610,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.63'
        },
        {
          offset: 10485762,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.64'
        },
        {
          offset: 12582914,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.65'
        },
        {
          offset: 14680066,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.66'
        },
        {
          offset: 4,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.79'
        },
        {
          offset: 2097156,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.80'
        },
        {
          offset: 4194308,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.81'
        },
        {
          offset: 6291460,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.82'
        },
        {
          offset: 8388612,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.83'
        },
        {
          offset: 10485764,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.84'
        },
        {
          offset: 12582916,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.85'
        },
        {
          offset: 14680068,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.86'
        },
        {
          offset: 6,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.89'
        },
        {
          offset: 2097158,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.90'
        },
        {
          offset: 4194310,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.91'
        },
        {
          offset: 6291462,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.92'
        },
        {
          offset: 8388614,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.93'
        },
        {
          offset: 10485766,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'ssf.94'
        },
        {
          offset: 12582918,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.95'
        },
        {
          offset: 14680070,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'sfx.96'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'sfx.02'
        }
      ]
    },
    qsound: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssf.51a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssf.52a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssf.53a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssf.54a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssf.55a'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssf.56a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssf.57a'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'ssf.58a'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'ssf2xjr1r.key'
        }
      ]
    }
  },
  vhunt2: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.03a'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.04a'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vh2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vh2.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vhunt2.key'
        }
      ]
    }
  },
  vhunt2r1: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.03'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.04'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.05'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.06'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.07'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.08'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.09'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2j.10'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vh2.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vh2.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vh2.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vh2.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vhunt2.key'
        }
      ]
    }
  },
  vsav: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3e.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3e.04d'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vm3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vm3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vsav.key'
        }
      ]
    }
  },
  vsavu: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3u.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3u.04d'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vm3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vm3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vsavu.key'
        }
      ]
    }
  },
  vsavj: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3j.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3j.04d'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3j.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3j.06b'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3j.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3j.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3j.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3j.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vm3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vm3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.12m'
        }
      ]
    },
    key: {
      size: 32,
      operations: [
        {
          offset: 0,
          length: 20,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vsavj.key'
        }
      ]
    }
  },
  vsava: {
    maincpu: {
      size: 4194304,
      operations: [
        {
          offset: 0,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3a.03d'
        },
        {
          offset: 524288,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3a.04d'
        },
        {
          offset: 1048576,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.05a'
        },
        {
          offset: 1572864,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.06a'
        },
        {
          offset: 2097152,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.07b'
        },
        {
          offset: 2621440,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.08a'
        },
        {
          offset: 3145728,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.09b'
        },
        {
          offset: 3670016,
          length: 524288,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.10b'
        }
      ]
    },
    gfx: {
      size: 33554432,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.13m'
        },
        {
          offset: 2,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.15m'
        },
        {
          offset: 4,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.17m'
        },
        {
          offset: 6,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.19m'
        },
        {
          offset: 16777216,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.14m'
        },
        {
          offset: 16777218,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.16m'
        },
        {
          offset: 16777220,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.18m'
        },
        {
          offset: 16777222,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 6,
          reverse: false,
          filename: 'vm3.20m'
        }
      ]
    },
    audiocpu: {
      size: 327680,
      operations: [
        {
          offset: 0,
          length: 32768,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vm3.01'
        },
        {
          offset: 65536,
          length: 98304,
          type: 'continue'
        },
        {
          offset: 163840,
          length: 131072,
          type: 'load',
          groupSize: 1,
          skip: 0,
          reverse: false,
          filename: 'vm3.02'
        }
      ]
    },
    qsound: {
      size: 8388608,
      operations: [
        {
          offset: 0,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.11m'
        },
        {
          offset: 4194304,
          length: 4194304,
          type: 'load',
          groupSize: 2,
          skip: 0,
          reverse: true,
          filename: 'vm3.12m'
  }