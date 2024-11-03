import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaxCalculatorService {

  constructor() { }

  // Sales and service tax
  SST = 8;

  // Business domain logic implemented here
  calcTotalPrice(numitems: number, price : number) : string {
    let grossPrice = numitems * price;
    let finalPrice = grossPrice * (1 + (this.SST /100));
    return finalPrice.toFixed(2);
  }

}
