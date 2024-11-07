import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  stringOfStyle="borderColor1 borderStyle2";

  // Approach #2: An  object with class names as the keys and 
  // truthy or falsy expressions as the values
  classesToAdd = {
    large: false,
    special: true,
    danger: false
  };


  flipValues() {
    this.classesToAdd.danger = !this.classesToAdd.danger;
    this.classesToAdd.special = !this.classesToAdd.special;
    this.classesToAdd.large = !this.classesToAdd.large;
  }

  // Approach #3: An array of class names
  classesInArray = ['medium', 'safe'];

  addNewName(val: string) {
    console.log("New class name to add : ", val);
    this.classesInArray.push(val);
  }

  removeRecentName() {
    this.classesInArray.pop();
  }



}
