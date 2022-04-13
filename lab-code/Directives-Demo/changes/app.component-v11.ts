import { Component } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  animal:string = '';

  selectedCar: string = '';

  cars: string [] = ['Jaguar','Toyota','Renault','Mercedes'];


}
