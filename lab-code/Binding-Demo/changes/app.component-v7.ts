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

  processFirstName(hie: HTMLInputElement) {
    console.log("The name attribute is : ", hie.name);
    console.log("The type attribute is : ", hie.type);
    console.log("The required attribute is : ", hie.required);
    console.log("The value of the control is : " + hie.value);

  }

  processNormalButton(be: HTMLButtonElement) {
    console.log("The button type is : " + be.type);
    console.log("Button name is  : " + be.name);
    console.log("Button text is : " + be.innerText);
  }

  processCheckBox(hie: HTMLInputElement) {
    console.log("The value of the control is : " + hie.value);
    console.log("Is the checkbox checked : " + hie.checked);
  }

}
