import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  // Declare two objects that will be bound as query parameters
  // using the queryParams directive in the template

  queryParamObj1 = { person : 'engineer', status: 1 };

  queryParamObj2 = { person : 'manager', status: 2 };


}
