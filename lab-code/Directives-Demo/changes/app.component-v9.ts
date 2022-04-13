import { Component } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buttonMessage: string = 'Show table contents';

  showTable: boolean = false;

  employees: Employee[] = [];

  // initializing array with 8 new objects
  constructor() {
    this.employees.push(new Employee("Peter",42,true));
    this.employees.push(new Employee("Jane",22,false));
    this.employees.push(new Employee("Hilary",36,true));
    this.employees.push(new Employee("Scot",27,false));
    this.employees.push(new Employee("Noah",50,true));
  }

  flipTableStatus() {
    if (this.buttonMessage === 'Show table contents')
      this.buttonMessage = 'Hide table contents';
    else   
    this.buttonMessage = 'Show table contents';

    this.showTable = !this.showTable;

  }
}
