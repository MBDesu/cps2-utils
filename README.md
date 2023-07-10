# CPS2 Utils
CPS2 Utils is a package for working with CPS2 ROMs in the MAME format in a browser. It supports unzipping, validating, decrypting, encrypting, patching with MiSTer `.mra` files, and more.

## Usage

### Installation
```
npm i cps2-utils
```

### Working with a MAME ROM
cps2-utils exposes a few classes for working with ROMs generally, but the main one you'll be using is `Cps2Rom`. It contains interfaces to functionality such as decryption, combining binary files, patching, and more.

To instantiate a `Cps2Rom`, supply it with the MAME ROM `.zip` and then invoke `read()`. It's probably a good idea to invoke `processExecutable()` after that, which will give you access to patching, decryption, etc.
```TypeScript
async getDecryptedRom(zipFile: File): Promise<Uint8Array> {
  const rom = await this.getRom(zipFile);
  await rom.decryptOpcodes();
  const decryptedOpcodes = rom.getDecryptedOpcodes();
}

async getRom(zipFile: File): Promise<Cps2Rom> {
  const rom = new Cps2Rom(zipFile);
  await rom.read();
  await rom.processExecutable();
  return Promise.resolve(rom);
}
```
`Cps2Rom`  also supports chaining its operations:
```TypeScript
async getDecryptedRom(zipFile: File): Promise<Uint8Array> {
  const rom = await new Cps2Rom(zipFile).read();
  const decryptedOpcodes = (await rom.processExecutable()).getDecryptedOpcodes();
  return Promise.resolve(decryptedOpcodes);
}
```
Using a library like `l8` to make the chains fluid is probably not the worst idea.

See [DarkMrSoft](https://github.com/MBDesu/DarkMrSoft) for a concrete example of using this library.

## Todo
- [x] MAME to Darksoft conversion
- [x] Concatenate executable binary
- [x] Get graphics
- [x] Decrypt
  - [x] `.zip`
  - [x] `.bin`
- [ ] Encrypt
  - [ ] Files?
  - [x] Binary
- [ ] Swap bytes
  - [ ] Files?
  - [ ] Binary
- [ ] Decode graphics
- [ ] `.ips` to `.mra`
- [ ] `.mra` to `.ips`
- [ ] Split binary to files
- [ ] Graphics patching
- [ ] Audio patching
- [ ] Fill operation
- [ ] Continue operation