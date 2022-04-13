import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
