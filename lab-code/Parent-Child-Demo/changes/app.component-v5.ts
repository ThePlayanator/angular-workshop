import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstChildComponent } from './first-child/first-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
