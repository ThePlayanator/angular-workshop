import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isSpecial = true;

  getTextColor() {
    return "red";
  }

  getStyleStrings() {
    return ""
  }

  // Approach #1: A string containing style properties separated by ;
  styleFirstImage = "float:left; width:100px; height:auto;"

  // Approach #2: An object with style names as the keys and style values 
  // as the values
  styleSecondImage = {
    border: "2px solid red",
    "border-radius": "8px",
    width: "200px",
  }
}
