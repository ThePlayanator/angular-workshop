import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  processFirstName(event: Event) {
    console.log("Event target type : ", event.type); // input
    // Casting approach #1
    let iEvent = (<InputEvent> event);
    console.log(iEvent.data);
    console.log(iEvent.inputType);
  }

  processLastName(event: Event) {
    console.log("Event target type : ", event.type); // keydown
    // Casting approach #2
    let kEvent = event as KeyboardEvent;
    console.log(kEvent.key);
    console.log(kEvent.code);
  }

  processNormalButton(event: Event) {
    console.log("Event target type : ", event.type); //  click
    let mEvent = event as MouseEvent;
    console.log(mEvent.clientX);
    console.log(mEvent.clientY);
    console.log(mEvent.button);
  }


}
