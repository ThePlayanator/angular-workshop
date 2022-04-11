import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  greenButtonText = "Change me !";
  imageName = "cat";
  animalNames = ['cat','dog','horse'];

  // for controlling dynamic binding of classes
  isItDangerous = false;
  isItSpecial = false;
  isItLarge = false;

  // for controlling status of button
  isDisabled = false;
  
  processSecondBox(hie: HTMLInputElement) {
    this.greenButtonText = hie.value;
  }

  processThirdBox(hie: HTMLInputElement) {
    for (const name of this.animalNames) {
      if (hie.value === name)
        this.imageName = name;
    }
  }

}



