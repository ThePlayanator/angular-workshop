import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  // Inject the FormBuilder as a service via
  // the constructor (to explore later in section on services)
  constructor(private fb: FormBuilder) { }

// We now have a FormArray as the single element within the main FormGroup
// We will add each profile as a FormGroup item to this FormArray
  profileForm = this.fb.group({

    profiles: this.fb.array([])


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


  get profiles() {
    return this.profileForm.get('profiles') as FormArray;
  }

  // The jobs FormArray is accessible from a specific
  // profile FormGroup item within the main profiles FormArray
  // Note that we can't make this a getter method, since getter methods
  // cannot have parameters, which we need for this case.
  jobs(profileIndex: number) {
    return this.profiles.at(profileIndex).get('jobs') as FormArray;
  }

  // Create a new FormGroup representing a profile
  // which itself contains a nested FormArray for jobs
  createNewProfile(): FormGroup {
    return this.fb.group({
      firstname: [''],
      lastname: [''],
      jobs: this.fb.array([])
    });
  }

  // Add a new profile FormGroup to the profiles FormArray
  addProfile() {
    this.profiles.push(this.createNewProfile());
  }

  // Remove an existing profile FormGroup from the profiles FormArray
  // based on its index position in the FormArray
  removeProfile(profileIndex: number) {
    this.profiles.removeAt(profileIndex);
  }

  // Create a new FormGroup with FormControls
  // representing info for a single new job
  createNewJob(): FormGroup {
    return this.fb.group({
      jobTitle : [''],
      years : [0],
    });
  }

  // Add a new Job FormGroup to jobs array within a specific 
  // profile FormGroup of the main profiles FormArray
  addJob(profileIndex: number) {
    this.jobs(profileIndex).push(this.createNewJob());
  }

  // Remove an existing Job FormGroup from the jobs FormArray
  // based on its index position in the FormArray
  // We also need to identify the specific profile FormGroup that this jobs
  // FormArray belongs in.
  removeJob(profileIndex: number, jobIndex: number) {
    this.jobs(profileIndex).removeAt(jobIndex);
  }

}
