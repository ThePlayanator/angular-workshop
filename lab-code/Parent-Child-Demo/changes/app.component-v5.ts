import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  parentCounter = 0;

  childText = '';

  // These two methods below are no longer required
  // incCounter() {
  //   this.parentCounter++;
  // }

  // decCounter() {
  //   this.parentCounter--;
  // }

  // This event handler for previous event binding from 
  // textChanged event is no longer needed
  //   processChangeFromChild(val: string) {
  //   this.childText = val;
  // }

}
