import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  parentString = "";

  firstStringFromGreatGrandChild = "";

  processChangeFromChild(val: string) {
    this.firstStringFromGreatGrandChild = val;
  }


}
