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


  constructor() {
    this.resetTextBoxes();
  }

  processThirdBox(boxContent: string) {

    this.thirdBoxContent = boxContent.toLocaleUpperCase();

  }

  resetTextBoxes() {
    
    this.firstBoxContent = this.initialValue;
    this.secondBoxContent = this.initialValue;
    this.thirdBoxContent = this.initialValue;

  }


}



