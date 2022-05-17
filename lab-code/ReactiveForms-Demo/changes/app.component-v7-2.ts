import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// Create a new FormGroup with nested FormControls and also
// a nested FormGroup
  profileForm = new FormGroup({

    firstname: new FormControl('',[Validators.required,Validators.minLength(3)]),

    // A non-empty string is required, with a maximum length of 6 characters
    lastname: new FormControl('',[Validators.required,Validators.maxLength(6)]),

    // A non-empty string is required, in the form of a valid email address    
    email: new FormControl('',[Validators.required,Validators.email]),

    // A number between 18 and 70 is required
    age : new FormControl(0,[Validators.required,Validators.min(18),Validators.max(70)]),

    // This has no validators so it is optional (i.e. can be empty)
    job: new FormControl('')
  });

  // implement logic to process submitted form data
  onSubmit() {
    console.log(this.profileForm.value);
  }

  // Getter methods for the various FormControl objects
  // This simplifies accessing them in the template syntax
  // using the ngIf directive in the corresponding template

  get firstname() { return this.profileForm.get('firstname'); }

  get lastname() { return this.profileForm.get('lastname'); }

  get email() { return this.profileForm.get('email'); }

  get age() { return this.profileForm.get('age'); }

  get job() { return this.profileForm.get('job'); }


}
