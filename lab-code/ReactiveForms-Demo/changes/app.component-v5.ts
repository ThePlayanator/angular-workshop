import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// Create a new FormGroup with nested FormControls and also
// a nested FormGroup
  profileForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
  });

  // implement logic to process submitted form data
  onSubmit() {
    console.log(this.profileForm.value);
  }

}
