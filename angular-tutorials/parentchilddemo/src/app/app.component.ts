import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstChildComponent } from './first-child/first-child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstChildComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  parentCounter = 0;

  childText = '';
  selectedColour: string=''
  incCounter() {
    this.parentCounter++;
  }

  decCounter() {
    this.parentCounter--;
  }

  processChangeFromChild(val: string) {
    this.childText = val;
  }
  
   // New event handler for color selection
   processColourChange(colour: string) {
    this.selectedColour = colour; // Store the selected color
}

}