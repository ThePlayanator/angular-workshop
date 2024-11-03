import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // for controlling dynamic binding of classes
  isItDangerous = false;
  isItSpecial = false;
  isItLarge = false;

  // for controlling disabled status of green button
  isDisabled = false;

  // to store contents of first text box
  firstTextBox = "";

  processFirstBox(hie: HTMLInputElement) {
    this.firstTextBox = hie.value;
  }

  imageName = "cat";
  animalNames = ['cat','dog','horse'];

  processAnimalBox(hie: HTMLInputElement) {
    for (const name of this.animalNames) {
      if (hie.value === name)
        this.imageName = name;
    }
  }


}
