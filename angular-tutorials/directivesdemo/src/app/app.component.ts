import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  // initial default value 100
  // so all employees are listed
  ageLimit: number = 100;
  maritalStatus: boolean | null = null;

  employees: Employee[] = [];

  // initializing array with 8 new objects
  constructor() {
    this.employees.push(new Employee("Peter",42,true));
    this.employees.push(new Employee("Jane",22,false));
    this.employees.push(new Employee("Hilary",36,true));
    this.employees.push(new Employee("Scot",27,false));
    this.employees.push(new Employee("Noah",50,true));
  }

  setNewLimit(val: string) {
    this.ageLimit = parseInt(val); 
  }

  setNewMarital(status: boolean){
    this.maritalStatus = status;
  }

  resetFilters() {
    this.ageLimit = 100; // Reset to show all ages
    this.maritalStatus = null; // Reset to show all marital statuses
  }

}
