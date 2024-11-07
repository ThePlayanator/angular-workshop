import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

/* We use the non-null assertion operator !
to prevent compile time error with default
compiler settings of strict type checking  */
@Input()
myEmployee!: Employee;

@Input()
employeeNum!: number;

@Output() 
rowChanged: EventEmitter<number> = new EventEmitter();


setNewValues(marStatus: boolean) {
  this.myEmployee.isMarried = marStatus;
  this.rowChanged.emit(this.employeeNum);
}


}
