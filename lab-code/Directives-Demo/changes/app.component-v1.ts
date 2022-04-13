import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Approach #1: A space-delimited string of class names
  stringOfClasses = "special safe";

  // Approach #2: An  object with class names as the keys and 
  // truthy or falsy expressions as the values
  classesToAdd = {
    large : false,
    special : this.stringOfClasses.length > 2,
    danger :  this.alwaysReturnTrue ()
  };

  // Approach #3: An array of class names
  classesInArray = ['medium','emphasize','safe'];

  alwaysReturnTrue () {
    return true;
  }

  isThisForReal = true;

  isItDangerous = true;


}
