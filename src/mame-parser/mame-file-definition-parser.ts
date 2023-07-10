// uncomment the stuff in rom-region.ts to make this work again
// also comment out the interfaces

// import * as fs from 'fs';
// import * as path from 'path';
// import { Rom } from '../cps2-rom/rom-region.js';

// export class MameFileDefinitionParser {

//   private OPERATIONS = [
//     'ROM_LOAD16_WORD_SWAP',
//     'ROM_LOAD16_BYTE',
//     'ROM_LOAD64_WORD',
//     'ROM_LOAD64_BYTE',
//     'ROM_FILL',
//     'ROM_LOAD',
//     'ROM_CONTINUE'
//   ];

//   parse(): void {
//     const __dirname = path.resolve(path.dirname(''));
//     fs.readFile(path.join(__dirname, 'cps2.cpp'), (err, data) => {

//       if (err) throw err;

//       const lines = data.toString().split('\n');
//       this.parseLines(lines);

//     });
//   }

//   private parseLines(lines: string[]): void {
//     const roms: {
//       [romName: string]: {
//         [regionName: string]: Rom.Region
//       }
//     } = {};

//     let romName = '';
//     let regionName = '';

//     for (let i = 0; i < lines.length; i++) {

//       const currentLine = lines[i].replaceAll(/\s/g, '');
//       if (currentLine.length < 1) continue; // blank lines

//       const token = currentLine.substring(0, currentLine.indexOf('('));

//       switch (token) {
//         case 'ROM_START':
//           romName = currentLine.substring(currentLine.indexOf('(') + 1, currentLine.indexOf(')'));
//           roms[romName] = {};
//           break;
//         case 'ROM_REGION':
//           const regionData = this.parseRegionLine(currentLine);
//           regionName = regionData.name;
//           // roms[romName].push(regionData);
//           roms[romName][regionName] = { size: regionData.size, operations: regionData.operations };
//           break;
//         default:
//           if (this.isOperation(token)) {
//             roms[romName][regionName].operations.push(this.parseOperation(token, currentLine));
//           } else { // must be ROM_END or invalid
//             break;
//           }
//           break;
//       }
//     }
//   }

//   private isOperation(token: string): boolean {
//     return this.OPERATIONS.indexOf(token) > -1;
//   }

//   private parseRegionLine(line: string): { size: number, name: string, operations: [] } {
//     const data = line.substring(line.indexOf('(') + 1, line.lastIndexOf(')')).split(',');
//     if (data[0] === 'QSOUND_SIZE') data[0] = 0x50000.toString();
//     else if (data[0] === 'CODE_SIZE') data[0] = 0x400000.toString();
//     return { size: Number(data[0]), name: data[1].replaceAll(/\"/g, ''), operations: []};
//   }

//   private parseOperation(operation: string, line: string): Rom.RegionOperation {
//     const args = line.substring(line.indexOf('(') + 1, line.lastIndexOf(')')).split(',');

//     switch (operation) {
//       case 'ROM_LOAD16_WORD_SWAP':
//         return new Rom.Load16WordSwap(args[0].replaceAll(/\"/g, ''), Number(args[1]), Number(args[2]));
//       case 'ROM_LOAD16_BYTE':
//         return new Rom.Load16Byte(args[0].replaceAll(/\"/g, ''), Number(args[1]), Number(args[2]));
//       case 'ROM_LOAD64_WORD':
//         return new Rom.Load64Word(args[0].replaceAll(/\"/g, ''), Number(args[1]), Number(args[2]));
//       case 'ROM_LOAD64_BYTE':
//         return new Rom.Load64Byte(args[0].replaceAll(/\"/g, ''), Number(args[1]), Number(args[2]));
//       case 'ROM_FILL':
//         return new Rom.Fill(Number(args[0]), Number(args[1]), Number(args[2]));
//       case 'ROM_LOAD':
//         return new Rom.Load(args[0].replaceAll(/\"/g, ''), Number(args[1]), Number(args[2]));
//       case 'ROM_CONTINUE':
//         return new Rom.Continue(Number(args[0]), Number(args[1]));
//       default:
//         throw Error;
//     }
//   }

// }

// const parser = new MameFileDefinitionParser();
// parser.parse();