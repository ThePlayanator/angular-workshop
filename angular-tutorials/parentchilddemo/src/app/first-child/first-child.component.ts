import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-first-child',
  standalone: true,
  imports: [],
  templateUrl: './first-child.component.html',
  styleUrl: './first-child.component.css'
})
export class FirstChildComponent {

  selectedColour: string='';
/*   All properties marked with @Input will be bound 
  to a parent component property and receive data from it */
  @Input() childCounter: number = 0;

/*   All properties marked with @Output will be bound 
  to a template statement that will usually reference 
  a method in the parent component  */
  @Output() 
  textChanged: EventEmitter<string> = new EventEmitter();
  // Q2 -> favColour
  @Output()
  favColour: EventEmitter<string> = new EventEmitter();

  processTextChange(value: string) {
    this.textChanged.emit(value);
  }

  onSelectedColour(value: string){
    this.favColour.emit(value); // Emit the selected color
    //this.selectedColour = value; // Update selectedColor in the component
  }
}