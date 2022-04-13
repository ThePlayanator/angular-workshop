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

  // no longer need this
  // @Output() 
  // textChanged: EventEmitter<string> = new EventEmitter();

  @Output()
  counterChanged: EventEmitter<number> = new EventEmitter();

  // Normal property
  childText = '';

  processTextChange(value: string) {
    // No longer need to do this
    //this.textChanged.emit(value);
    this.childText = value;
  }

  incCounter() {
    this.childCounter++;
    this.counterChanged.emit(this.childCounter);
  }

  decCounter() {
    this.childCounter--;
    this.counterChanged.emit(this.childCounter);
  }

}
