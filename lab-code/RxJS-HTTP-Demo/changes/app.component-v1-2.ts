import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  timerObservable$: Observable<number>;

  constructor() {

/*     Here we simulate an asynchronous stream of data 
    arriving by using the setInterval timer function to emit 
    a number every 1 second  */

    this.timerObservable$ = new Observable((observer) => {
      let count = 0;
    
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

  }

  ngOnInit() {

/*     Subscribe using the simplest form 
    This starts the stream of values that occur every 1 second
    We maintain access to the subscription object so that we can
    have the option of unsubscribing later */

    const mySubscription = this.timerObservable$.subscribe(
      event => console.log(event),
    );

/*     By calling unsubscribe on the subscription object after 
    10 seconds, we cancel the subscription and no longer receive 
    any more values from the ongoing data stream. If you comment
    out this block of code below, the stream of values are logged
    indefinitely */
    setTimeout(() => {
      mySubscription.unsubscribe();
    },10000);

  }


}
