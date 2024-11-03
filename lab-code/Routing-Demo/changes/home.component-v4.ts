import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  heroes = [
    {id: '1', firstname : 'Peter'},
    {id: '2', firstname : 'Tony'},
    {id: '3', firstname : 'Diana'},
    {id: '4', firstname : 'Bruce'},
    {id: '5', firstname : 'James'},

  ];


}
