import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  profileForm: FormGroup;

  // Array of strings for radio button choices
  languages = ['Java', 'Python', 'C#', 'PHP'];

  // Array of strings for drop down list choices
  countries = ['USA', 'UK', 'China', 'India'];


  // Array of objects for check box choices
  carsData = [
    { id: 1, name: 'Mazda' },
    { id: 2, name: 'Citroen' },
    { id: 3, name: 'Bentley' },
    { id: 4, name: 'Ford' }
  ];


  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      favlanguage: [''],
      favcountry: [this.countries[0]],
      favcars : this.fb.array([])
    });

    // initialize the favcars FormArray with FormControls 
    // whose initial values are false (i.e. unticked checkboxes)
    // there should be a matching FormControl for each item in carsData
    for (let data of this.carsData) {
      this.favcars.push(new FormControl(false));
    }


  }


  get favcars() {
    return this.profileForm.get('favcars') as FormArray;
  }

  onSubmit() {
    console.log("The form's actual value ", this.profileForm.value);

    // First perform a map to obtain a new array containing the names
    // of objects from carsData at the corresponding index position 
    // where favcars FormControl was checked
    const selectedCarArray = this.profileForm.value.favcars
      .map((checked: boolean, i: number) => checked ? this.carsData[i].name : null);

    // Next, perform a filter on this new array to remove 
    // all elements with the value null, thereby obtaining the 
    // car names corresponding to the ticked checkboxes
    const actualCarArray = selectedCarArray.filter((v: any) => v !== null);

    console.log("The actual selected cars are ", actualCarArray);

  }

}
