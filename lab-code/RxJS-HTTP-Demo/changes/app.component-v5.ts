import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  numberHolder = 0;
  valHolder = 0;
  arrayHolder : number[] = [];

  arraySubscription!: Subscription;
  timerSubscription!: Subscription;
  valueSubscription!: Subscription;

  timerObservable$ : Observable<number>;
  delayObservable$ : Observable<number>;
  arrayObservable$ : Observable<number[]>;

  constructor() {

    /*     Here we simulate an asynchronous stream of data 
        by using the setInterval timer function to emit 
        a number every 1 second  */

    this.timerObservable$ = new Observable((observer) => {
      let count = 0;

      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });


    /*     Here we simulate an asynchronous stream of arrays 
        by using the setInterval timer function to emit 
        an array of numbers every 1 second  */    
    this.arrayObservable$ = new Observable((observer) => {
      let count = 1;

      setInterval(() => {

        // Generate a dummy array of 5 values
        let tempArr : number[] = [];
        for (let i = 1; i <= 5; i++)
          tempArr.push(i*count);
        observer.next(tempArr);
        count++;
      }, 1000);
    });


    /*     Here we simulate network latency in 
    a HTTP response arriving 5 seconds after the 
    initial request was sent out by using the setTimeout timer function 
      */
    this.delayObservable$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(888);
      }, 5000);
    });

  }

  ngOnInit() {

    /*     Subscribing in the conventional approach using 
      a single callback to handle the stream of successful emissions. */

    this.timerSubscription = this.timerObservable$.subscribe(
      event => { this.numberHolder = event; }
    );

    this.arraySubscription = this.arrayObservable$.subscribe(
      event => { this.arrayHolder = event; }
    );

    this.valueSubscription = this.delayObservable$.subscribe(
      event => { this.valHolder = event; }
    );

  }

  // This lifecycle hook is called when a component is 
  // removed from the DOM tree
  ngOnDestroy() {
    /*     We need to manually unsubscribe when the component is
      destroyed. Otherwise, we risk memory leaks. This is
       particularly true when we are subscribing to HttpClient observables.
       With the async pipe, this is no longer necessary as 
       the pipe itself takes care of unsubscribing from the
       observable
     */
    this.timerSubscription.unsubscribe();
    this.arraySubscription.unsubscribe();
    this.valueSubscription.unsubscribe();
  }

}
