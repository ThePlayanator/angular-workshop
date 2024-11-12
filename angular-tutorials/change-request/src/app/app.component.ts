import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  // Create a new FormGroup with nested FormControls and also
  // a nested FormGroup
  crForm = new FormGroup({

    crNumber: new FormControl(0,[Validators.required,Validators.min(100000),Validators.max(999999)]),

    // A non-empty string is required, with a maximum length of 6 characters
    sl_crNumber: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),

    // A non-empty string is required, in the form of a valid email address    
    crDate: new FormControl('',[Validators.required, dateValidator]),

    pic : new FormControl('',[Validators.required,Validators.minLength(3)]),

    // This has no validators so it is optional (i.e. can be empty)
    crDescription: new FormControl('')
  });

  // implement logic to process submitted form data
  onSubmit() {
    console.log(this.crForm.value);
  }

  // Getter methods for the various FormControl objects
  // This simplifies accessing them in the template syntax
  // using the ngIf directive in the corresponding template

  get crNum() { return this.crForm.get('crNumber'); }

  get slcr() { return this.crForm.get('sl_crNumber'); }

  get dateRequested() { return this.crForm.get('crDate'); }

  get sippic() { return this.crForm.get('pic'); }

  get job() { return this.crForm.get('job'); }


  

}

export function dateValidator(control: AbstractControl): ValidationErrors | null {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Adjust the pattern as per your date format
  return datePattern.test(control.value) ? null : { invalidDate: true };
}
