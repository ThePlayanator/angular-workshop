import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  initialValue = 'cat';

  firstBoxContent = '';
  secondBoxContent = '';
  thirdBoxContent = '';
  fourthBoxContent = '';


  constructor() {
    this.resetTextBoxes();
  }

  processFourthBox(boxContent: string) {

    this.fourthBoxContent = boxContent.toLocaleUpperCase();

  }

  resetTextBoxes() {
    
    this.firstBoxContent = this.initialValue;
    this.secondBoxContent = this.initialValue;
    this.thirdBoxContent = this.initialValue;
    this.fourthBoxContent = this.initialValue;

  }


}



