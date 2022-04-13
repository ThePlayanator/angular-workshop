import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  styleTheText = {
    'font-size' : '30px',
    'font-style' : 'italic',
    'color' : 'green'
  }

  // No error checking performed
  // Make sure you enter a valid value
  changeColor(val: string) {
    console.log("New color : ", val);
    this.styleTheText.color = val;
  }

  // No error checking performed
  // Make sure you enter a valid value
  changeFontSize(val: string) {
    console.log("New font size : ", val);
    this.styleTheText['font-size'] = val + 'px';
  }

}
