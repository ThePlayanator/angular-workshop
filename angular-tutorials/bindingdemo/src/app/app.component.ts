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

  processFirstTextField(hie: HTMLInputElement) {
    console.log("The content of first text field is : " + hie.value);
  }

  processCheckBox(hie: HTMLInputElement) {
    console.log("The value of the checkbox is : " + hie.value);
    console.log("Is the checkbox checked ? : " + hie.checked);
  }

}
