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

  // Approach #1: A space-delimited string of class names
  // Classess are separated by space
  stringOfClasses = "special safe";

  stringOfDivClasses = "borderStyle1 borderColor1";

  // Approach #2: An  object with class names as the keys and 
  // truthy or falsy expressions as the values
  classesToAdd = {
    large : false,
    special : this.stringOfClasses.length > 2,
    danger :  this.alwaysReturnTrue ()
  };

  classesDivToAdd = {
    borderWidth2 : false,
    borderStyle2 : this.stringOfClasses.length > 2,
    borderColor2 :  this.alwaysReturnTrue ()
  };

  // Approach #3: An array of class names
  classesInArray = ['medium','emphasize','safe'];

  classesDivInArray = ['borderColor2', 'borderStyle1', 'borderColor1']

  alwaysReturnTrue () {
    return true;
  }

  isThisForReal = true;

  isItDangerous = true;


}
