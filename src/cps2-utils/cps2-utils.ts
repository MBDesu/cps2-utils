import { roms } from '../roms.js';

export class Cps2Utils {

  static getSupportedRoms(): string[] {
    return Object.keys(roms);
  }

}