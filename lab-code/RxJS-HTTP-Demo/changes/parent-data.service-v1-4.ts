import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentDataService {

/*   Make the data property an observable 
  which can emit a stream of values when 
  a publisher publishes new values to it  */
  data = new Subject<string>();
  data$ = this.data.asObservable();

/*   Publisher will call this setData method with
    an appropriate value which will then
    publish / transmit these values to all
    consumers that subscribe to this service
 */
  setData(val: string) {
    this.data.next(val);
  }

}
