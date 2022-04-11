import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myLocation = 'Kuala Lumpur';
  // possible values: cat, dog, horse
  imageName = 'dog';

  // possible values: www.cnn.com, www.bbc.com, etc
  newsSite = 'www.bbc.com';

  getMoreLanguages(): string {
    return 'Java and JavaScript';
  }

}
