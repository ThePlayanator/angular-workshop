import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  initialValue = 'cat';

  secondBoxContent = '';
  thirdBoxContent = '';

  constructor() {
    this.resetTextBoxes();
  }

  // Convert the content of the third text box into upper case
  processThirdBox(boxContent: string) {
    this.thirdBoxContent = boxContent.toLocaleUpperCase();
  }

  resetTextBoxes() {
    
    this.secondBoxContent = this.initialValue;
    this.thirdBoxContent = this.initialValue;

  }

}
