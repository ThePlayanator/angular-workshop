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

  // Demonstrating getting property data from InputEvent
  // This tells us the key related to that event
  
  processFirstTextField(event: Event) { 

    // Approach #1 syntax to cast event to InputEvent 
    let iEvent = (<InputEvent> event);
    console.log("The key typed in the first text field is : ", iEvent.data);

    /* Purpose: <InputEvent> is a type cast used to indicate that the event itself is of type InputEvent. This type is specific to events that represent user interactions involving input elements, such as typing into a text field.

    Usage: When you cast event to <InputEvent>, you're specifying that event is an InputEvent and can access properties unique to InputEvent, such as .data, which contains the character that was typed (e.g., a single character added by the user in real-time). */

  }

  // Demonstrating getting value property from HTMLInputElement
  // This tells us the content of the text field, the most
  // common use case

  processSecondTextField(event: Event) {

    // Approach #1 syntax to cast event.target to HTMLInputElement 
    let hie = (<HTMLInputElement> event.target);
    console.log("The content of the second text field is : " + hie.value);

   /* Purpose: <HTMLInputElement> is used to cast the event.target property, which is typically a generic EventTarget, to an HTMLInputElement. This cast allows access to properties and methods that are specific to <input> elements, such as .value.

    Usage: When you cast event.target to <HTMLInputElement>, you’re telling TypeScript that this is an input element, which enables access to HTMLInputElement properties like .value to get the full content of the input. */
    
  }

  // Demonstrating getting value and checked property 
  // from HTMLInputElement
  processCheckBox(event: Event) {
    
     // Approach #2 syntax to cast event.target to HTMLInputElement 
    let hie = event.target as HTMLInputElement;
    console.log("The value of the check box is : " + hie.value);
    console.log("Is the checkbox checked  ? : " + hie.checked);
  }

  // Demonstrating innertext property 
  // from HTMLButtonElement
  processNormalButton(event: Event) {

    // Approach #2 syntax to cast event.target to a different class 
    let be = event.target as HTMLButtonElement;

    // Most of the time, when user clicks on a button
    // we are not interested in the button itself, we just
    // want to perform some action
    // However, we can also access properties on the button
    // as well like type and innerText 
    console.log("The button type is : " + be.type);
    console.log("Button text is : " + be.innerText);

    // innerText = inputs in the text field
    // type = type of input

  }

  processRadioButton(event: Event){

    const selectedValue = (event.target as HTMLButtonElement).value;

    console.log("This button gives me " + selectedValue + " as my favourite subjects");

  }


}
