import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Inject the FormBuilder as a service via
  // the constructor (to explore later in section on services)
  constructor(private fb: FormBuilder) { }

// Use the group method of FormBuilder to group the FormControls
// within the main FormGroup
  profileForm = this.fb.group({

    // A non-empty string is required, with a minimum length of 3 characters
    firstname: ['',[Validators.required,Validators.minLength(3)]],

    // A non-empty string is required, with a maximum length of 6 characters
    lastname: ['',[Validators.required,Validators.maxLength(6)]],

    // A non-empty string is required, in the form of a valid email address    
    email: ['',[Validators.required,Validators.email]],

    // A number between 18 and 70 is required
    age : [0,[Validators.required,Validators.min(18),Validators.max(70)]],

    job: ['']
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
