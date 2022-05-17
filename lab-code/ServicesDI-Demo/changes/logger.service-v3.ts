import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  // Implement a simple method to log 
  // output to the console
  logMessage(message : any ) {
    console.log(message);
  }

}
