import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipin';
  morseInput: string;
  mdInput: string;
  // tslint:disable-next-line:typedef
  convMorse(stringInput: string){
    this.morseInput = stringInput;
  }
  // tslint:disable-next-line:typedef
  convMd(stringInput: string){
    this.mdInput = stringInput;
  }
}
