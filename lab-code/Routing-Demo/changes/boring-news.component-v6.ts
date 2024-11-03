import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-boring-news',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './boring-news.component.html',
  styleUrl: './boring-news.component.css'
})
export class BoringNewsComponent {

  coolFramework = "ExpressJS"

}
