import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  myFavFramework = "React";

}
