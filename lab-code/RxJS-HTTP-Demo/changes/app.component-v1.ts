import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  basicNumbers: number[] = [1, 2, 3, 4, 5];
/*   Convention is for observable properties / variables 
  to have trailing $ to distinguish them from normal
  properties */
  firstObservable$: Observable<number>;
  secondObservable$: Observable<string>;

  constructor() {

/*     Using the from and of RxJS operators to create initial 
    synchronous stream of values for the two observables */
    this.firstObservable$ = from(this.basicNumbers);
    this.secondObservable$ = of('cat', 'dog', 'mouse');
  }

  ngOnInit() {

/*     Creating a subscription object by calling the subscribe method
    The object passed as an argument contains the 3 callback functions
    to handle the specified emitted values */
    const firstSubscription = this.firstObservable$.subscribe({
      // on successful emissions
      next: event => console.log(event),
      // on errors
      error: error => console.log(error),
      // called once on completion
      complete: () => console.log('complete!')
    });

/*     A simpler and more common form:
    We don't need to retain access to the subscription object.
    When we call subscribe, it will automatically start the emission
    of values from the observable. At minimum, we only need to specify one 
    single callback to handle successful value emissions*/

    this.secondObservable$.subscribe(
      // on successful emissions
      event => console.log(event),
    );

  }


}
