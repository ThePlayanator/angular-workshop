import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Employee } from './Employee';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  animals: string[] = ['cat','dog','mouse','horse'];

  employees: Employee[] = [];

  // initializing array with 4 new objects
  constructor() {
    this.employees.push(new Employee("Peter",42,true));
    this.employees.push(new Employee("Jane",22,false));
    this.employees.push(new Employee("Hilary",36,true));
    this.employees.push(new Employee("Scot",27,false));
  }

  removeEmployee() {
    this.employees.pop();
  }


}
