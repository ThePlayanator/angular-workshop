import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GreatGrandChildComponent } from '../great-grand-child/great-grand-child.component';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [GreatGrandChildComponent],
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.css'
})
export class GrandChildComponent {

  /*  These properties and method serve no purpose 
    in this component except as intermediary 
    placeholders for values transmitted up and down the 
    component hierarchy 
*/

  @Input() tempString: String = "";
  @Output() textChanged: EventEmitter<string> = new EventEmitter();

  processChangeFromChild(val: string) {
    this.textChanged.emit(val);
  }

}
