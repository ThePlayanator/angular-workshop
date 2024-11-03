import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  heroName = '';
  heroId = '';

  heroes = [
    {id: '1', firstname : 'Peter'},
    {id: '2', firstname : 'Tony'},
    {id: '3', firstname : 'Diana'},
    {id: '4', firstname : 'Bruce'},
    {id: '5', firstname : 'James'},

  ];

  // Inject the Router service
  constructor(private router:Router) {
  }  

  navigateToHero() {
    console.log(this.heroId);
    console.log(this.heroName);

    // Use the navigateByUrl method to
    // directly navigate to a stated path
    this.router.navigateByUrl('hero/' + this.heroId + "/" + this.heroName);
  }


}
