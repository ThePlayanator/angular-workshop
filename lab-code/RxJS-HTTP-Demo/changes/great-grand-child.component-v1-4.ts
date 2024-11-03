import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ParentDataService } from '../parent-data.service';

@Component({
  selector: 'app-great-grand-child',
  standalone: true,
  imports: [],
  templateUrl: './great-grand-child.component.html',
  styleUrl: './great-grand-child.component.css'
})
export class GreatGrandChildComponent {

  subscription!: Subscription;
  secondStringFromParent = '';

/*   Injecting the ParentDataService and then subscribing 
    to the data Observable within it. This means that when
    we subscribe to it, the publishing of any data to it
    will cause the subscribed arrow function to run which
    store the published value into secondStringFromParent
     */

  constructor(private dataService: ParentDataService) {

    this.subscription = this.dataService.data$.subscribe(
      data => {
        this.secondStringFromParent = data;
      }
    );
  }


  @Input() firstStringFromParent : String = "";
  @Output() textChanged: EventEmitter<string> = new EventEmitter();

  greatGrandChildString = "";

  processTextChange(value: string) {
    this.greatGrandChildString = value;
    this.textChanged.emit(value);
  }

}
