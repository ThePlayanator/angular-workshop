import { Component, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent {

/*   All properties marked with @Input will be bound 
  to a parent component property and receive data from it */
  @Input() 
  childCounter: number = 0;

/*   All properties marked with @Output will be bound 
  to a template statement that will usually reference 
  a method in the parent component  */
  @Output() 
  textChanged: EventEmitter<string> = new EventEmitter();

  @Output()
  counterChanged: EventEmitter<number> = new EventEmitter();

  processTextChange(value: string) {
    this.textChanged.emit(value);
  }


/*     Notice that we do not increment or decrement childCounter directly.
    Instead, we pass the value of childCounter added / subtracted with 1 
    as the value emitted with the event counterChanged. 
    Subsequently, the property binding in the parent template binding
    will change childCounter as a result of change in the parentCounter
*/  

  incCounter() {
    this.counterChanged.emit(this.childCounter + 1);
  }

  decCounter() {
    this.counterChanged.emit(this.childCounter - 1);
  }

}
