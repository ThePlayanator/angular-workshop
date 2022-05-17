import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Declaring a new FormControl class instance
  firstName = new FormControl('');


  resetFirstName() {
    // setValue() method updates the value of the form control 
    this.firstName.setValue('Superman');
  }
}
