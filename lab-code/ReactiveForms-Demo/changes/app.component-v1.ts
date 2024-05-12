import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // Declaring a new FormControl class instance
  firstName = new FormControl('');


  resetFirstName() {
    // setValue() method updates the value of the form control 
    this.firstName.setValue('Superman');
  }

}
