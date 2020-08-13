import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {
  transformMorseResult = '';
  clear = '';

  transform (input: string)  {
    for (let counter = 0; counter < input.length; counter++) {
      switch (input.charAt(counter).toUpperCase()) {
        case ' ':
          this.transformMorseResult += '|';
          break;
        case 'A':
          this.transformMorseResult += '. - |';
          break;

        case 'B':
          this.transformMorseResult += '- . . . |';
          break;
        case 'C':
          this.transformMorseResult += '- . - . |';
          break;
        case 'D':
          this.transformMorseResult += '- . . |';
          break;
        case 'E':
          this.transformMorseResult += '. |';
          break;
        case 'F':
          this.transformMorseResult += '. . - . |';
          break;
        case 'G':
          this.transformMorseResult += '- - . |';
          break;
        case 'H':
          this.transformMorseResult += '. . . . |';
          break;
        case 'I':
          this.transformMorseResult += '. . |';
          break;
        case 'J':
          this.transformMorseResult += '. - - - |';
          break;
        case 'K':
          this.transformMorseResult += '- . - |';
          break;
        case 'L':
          this.transformMorseResult += '. - . . |';
          break;
        case 'M':
          this.transformMorseResult += '- - |';
          break;
        case 'N':
          this.transformMorseResult += '- . |';
          break;
        case 'O':
          this.transformMorseResult += '- - - |';
          break;
        case 'P':
          this.transformMorseResult += '. - - . |';
          break;
        case 'Q':
          this.transformMorseResult += '- - . - |';
          break;
        case 'R':
          this.transformMorseResult += '. - . |';
          break;
        case 'S':
          this.transformMorseResult += '. . . |';
          break;
        case 'T':
          this.transformMorseResult += '- |';
          break;
        case 'U':
          this.transformMorseResult += '. . - |';
          break;
        case 'V':
          this.transformMorseResult += '. . . - |';
          break;
        case 'W':
          this.transformMorseResult += '. - - |';
          break;
        case 'X':
          this.transformMorseResult += '- . . - |';
          break;
        case 'Y':
          this.transformMorseResult += '- . - - |';
          break;
        case 'Z':
          this.transformMorseResult += '- - . . |';
          break;
        case 'Æ':
          this.transformMorseResult += '. - . - |';
          break;
        case 'Ø':
          this.transformMorseResult += '- - - . |';
          break;
        case 'Å':
          this.transformMorseResult += '. - - . - |';
          break;
        case '1':
          this.transformMorseResult += '. - - - - |';
          break;
        case '2':
          this.transformMorseResult += '. . - - - |';
          break;
        case '3':
          this.transformMorseResult += '. . . - - |';
          break;
        case '4':
          this.transformMorseResult += '. . . . - |';
          break;
        case '5':
          this.transformMorseResult += '. . . . . |';
          break;
        case '6':
          this.transformMorseResult += '- . . . . |';
          break;
        case '7':
          this.transformMorseResult += '- - . . . |';
          break;
        case '8':
          this.transformMorseResult += '- - - . . |';
          break;
        case '9':
          this.transformMorseResult += '- - - - . |';
          break;
        case '0':
          this.transformMorseResult += '- - - - - |';
          break;
        case '.':
          this.transformMorseResult += '. - . - . -|';
          break;
        case ',':
          this.transformMorseResult += '- - . . - - |';
          break;
        case ':':
          this.transformMorseResult += '- - - . . . |';
          break;
        case '?':
          this.transformMorseResult += '. . - - . . |';
          break;
        case '\'':
          this.transformMorseResult += '. - - - - . |';
          break;
        case '-':
          this.transformMorseResult += '- . . . . - |';
          break;
        case '/':
          this.transformMorseResult += '- . . - . |';
          break;
        case '(':
          this.transformMorseResult += '- . - - . |';
          break;
        case ')':
          this.transformMorseResult += '- . - - . - |';
          break;
        case '"':
          this.transformMorseResult += '. - . . - . |';
          break;
        case '\r\n':
          this.transformMorseResult += '. - . - |';
          break;
        case '*':
          this.transformMorseResult += '- . . - |';
          break;
        case '@':
          this.transformMorseResult += '. - - . - . |';
          break;
        default:
          return 'ahhhh';
          break;
      }
    }
    this.clear = this.transformMorseResult;
    this.transformMorseResult = '';
    return this.clear;
  }
}
