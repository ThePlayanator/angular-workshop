import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Demonstrating property binding";
  
  isDisabled = true;

  // possible values: cat, dog, horse
  imageName = 'dog';

  // possible values: www.cnn.com, www.bbc.com, etc
  newsSite = 'www.bbc.com';

}
