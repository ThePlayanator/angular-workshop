import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-great-grand-child',
  standalone: true,
  imports: [],
  templateUrl: './great-grand-child.component.html',
  styleUrl: './great-grand-child.component.css'
})
export class GreatGrandChildComponent {

  @Input() firstStringFromParent : String = "";
  @Output() textChanged: EventEmitter<string> = new EventEmitter();

  greatGrandChildString = "";

  processTextChange(value: string) {
    this.greatGrandChildString = value;
    this.textChanged.emit(value);
  }

}
