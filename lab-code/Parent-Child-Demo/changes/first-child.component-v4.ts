import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-first-child',
  standalone: true,
  imports: [],
  templateUrl: './first-child.component.html',
  styleUrl: './first-child.component.css'
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


  incCounter() {

    // Note that we do not not increment or decrement childCounter directly
    // for e.g.
    // this.childCounter++;

    // Instead, we get a new updated value from an expression involving childCounter
    // and then transmit this updated value back to the parent using emit on a new
    // EventEmitter object counterChanged

    this.counterChanged.emit(this.childCounter + 1);

    // Subsequently, the property binding in the parent template binding
    // will change childCounter as a result of change in the parentCounter


  }

  decCounter() {
    this.counterChanged.emit(this.childCounter - 1);
  }



}
