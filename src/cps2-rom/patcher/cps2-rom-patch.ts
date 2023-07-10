export interface Patch {
  offset: number;
  bytes: Uint8Array;
}

export interface MraDefinition {
  patches: Patch[];
  eepromBytes: Uint8Array;
}
