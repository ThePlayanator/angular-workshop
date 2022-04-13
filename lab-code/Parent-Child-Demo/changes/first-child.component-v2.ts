import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent {

/*   All properties marked with @Input will be bound 
  to a parent component property and receive data from it */
  @Input() childCounter: number = 0;

}
