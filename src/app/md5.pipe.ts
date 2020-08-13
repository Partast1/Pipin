import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'md5'
})
export class Md5Pipe implements PipeTransform {
  transformMD5Result = '';
  clear = '';
  transform (input: string) {
    for (let counter = 0; counter < input.length; counter++) {
      switch (input.charAt(counter).toUpperCase()) {
        case ' ':
          this.transformMD5Result += 'd41d8cd98f00b204e9800998ecf8427e |';
          break;
        case 'A':
          this.transformMD5Result += '7fc56270e7a70fa81a5935b72eacbe29 |';
          break;

        case 'B':
          this.transformMD5Result += '9d5ed678fe57bcca610140957afab571 |';
          break;
        case 'C':
          this.transformMD5Result += '0d61f8370cad1d412f80b84d143e1257 |';
          break;
        case 'D':
          this.transformMD5Result += 'f623e75af30e62bbd73d6df5b50bb7b5 |';
          break;
        case 'E':
          this.transformMD5Result += '3a3ea00cfc35332cedf6e5e9a32e94da |';
          break;
        case 'F':
          this.transformMD5Result += '800618943025315f869e4e1f09471012 |';
          break;
        case 'G':
          this.transformMD5Result += 'dfcf28d0734569a6a693bc8194de62bf |';
          break;
        case 'H':
          this.transformMD5Result += 'c1d9f50f86825a1a2302ec2449c17196 |';
          break;
        case 'I':
          this.transformMD5Result += 'dd7536794b63bf90eccfd37f9b147d7f |';
          break;
        case 'J':
          this.transformMD5Result += 'ff44570aca8241914870afbc310cdb85 |';
          break;
        case 'K':
          this.transformMD5Result += 'a5f3c6a11b03839d46af9fb43c97c188 |';
          break;
        case 'L':
          this.transformMD5Result += 'd20caec3b48a1eef164cb4ca81ba2587 |';
          break;
        case 'M':
          this.transformMD5Result += '69691c7bdcc3ce6d5d8a1361f22d04ac |';
          break;
        case 'N':
          this.transformMD5Result += '8d9c307cb7f3c4a32822a51922d1ceaa |';
          break;
        case 'O':
          this.transformMD5Result += 'f186217753c37b9b9f958d906208506e |';
          break;
        case 'P':
          this.transformMD5Result += '44c29edb103a2872f519ad0c9a0fdaaa |';
          break;
        case 'Q':
          this.transformMD5Result += 'f09564c9ca56850d4cd6b3319e541aee |';
          break;
        case 'R':
          this.transformMD5Result += 'e1e1d3d40573127e9ee0480caf1283d6 |';
          break;
        case 'S':
          this.transformMD5Result += '5dbc98dcc983a70728bd082d1a47546e |';
          break;
        case 'T':
          this.transformMD5Result += 'b9ece18c950afbfa6b0fdbfa4ff731d3 |';
          break;
        case 'U':
          this.transformMD5Result += '4c614360da93c0a041b22e537de151eb |';
          break;
        case 'V':
          this.transformMD5Result += '5206560a306a2e085a437fd258eb57ce |';
          break;
        case 'W':
          this.transformMD5Result += '61e9c06ea9a85a5088a499df6458d276 |';
          break;
        case 'X':
          this.transformMD5Result += '02129bb861061d1a052c592e2dc6b383 |';
          break;
        case 'Y':
          this.transformMD5Result += '57cec4137b614c87cb4e24a3d003a3e0 |';
          break;
        case 'Z':
          this.transformMD5Result += '21c2e59531c8710156d34a3c30ac81d5 |';
          break;
        case 'Æ':
          this.transformMD5Result += '4f1996ab783f10ea86a63e6174997cb2 |';
          break;
        case 'Ø':
          this.transformMD5Result += 'dd3d5eb0013c3bde1e0dc0f80a071555 |';
          break;
        case 'Å':
          this.transformMD5Result += '3ea084eb8d3d4a5309d82a0f014842fa |';
          break;
        case '1':
          this.transformMD5Result += 'c4ca4238a0b923820dcc509a6f75849b |';
          break;
        case '2':
          this.transformMD5Result += 'c81e728d9d4c2f636f067f89cc14862c |';
          break;
        case '3':
          this.transformMD5Result += 'eccbc87e4b5ce2fe28308fd9f2a7baf3 |';
          break;
        case '4':
          this.transformMD5Result += 'a87ff679a2f3e71d9181a67b7542122c |';
          break;
        case '5':
          this.transformMD5Result += 'e4da3b7fbbce2345d7772b0674a318d5 |';
          break;
        case '6':
          this.transformMD5Result += '1679091c5a880faf6fb5e6087eb1b2dc |';
          break;
        case '7':
          this.transformMD5Result += '8f14e45fceea167a5a36dedd4bea2543 |';
          break;
        case '8':
          this.transformMD5Result += 'c9f0f895fb98ab9159f51fd0297e236d |';
          break;
        case '9':
          this.transformMD5Result += '45c48cce2e2d7fbdea1afc51c7c6ad26 |';
          break;
        case '0':
          this.transformMD5Result += 'cfcd208495d565ef66e7dff9f98764da |';
          break;
        case '.':
          this.transformMD5Result += '5058f1af8388633f609cadb75a75dc9d |';
          break;
        case ',':
          this.transformMD5Result += 'c0cb5f0fcf239ab3d9c1fcd31fff1efc |';
          break;
        case ':':
          this.transformMD5Result += '853ae90f0351324bd73ea615e6487517 |';
          break;
        case '?':
          this.transformMD5Result += 'd1457b72c3fb323a2671125aef3eab5d |';
          break;
        case '\'':
          this.transformMD5Result += '024c94d6e03b6f67a86b952b914816c7 |';
          break;
        case '-':
          this.transformMD5Result += '336d5ebc5436534e61d16e63ddfca327 |';
          break;
        case '/':
          this.transformMD5Result += '6666cd76f96956469e7be39d750cc7d9 |';
          break;
        case '(':
          this.transformMD5Result += '84c40473414caf2ed4a7b1283e48bbf4 |';
          break;
        case ')':
          this.transformMD5Result += '9371d7a2e3ae86a00aab4771e39d255d |';
          break;
        case '"':
          this.transformMD5Result += '3bd864034f446da13581129bb17f9191 |';
          break;
        case '*':
          this.transformMD5Result += '3389dae361af79b04c9c8e7057f60cc6 |';
          break;
        case '@':
          this.transformMD5Result += '518ed29525738cebdac49c49e60ea9d3 |';
          break;
        default:
          return 'ahhhh';
          break;
      }
    }
    this.clear = this.transformMD5Result;
    this.transformMD5Result = '';
    return this.clear;
  }
}
