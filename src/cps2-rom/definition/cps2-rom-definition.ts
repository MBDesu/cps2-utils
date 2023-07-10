import { Rom } from '../rom-region.js';

export interface Cps2RomDefinitions {
  [romName: string]: {
    [regionName: string]: Rom.Region
  }
}
export interface Cps2RomDefinition {
  [regionName: string]: Rom.Region
};