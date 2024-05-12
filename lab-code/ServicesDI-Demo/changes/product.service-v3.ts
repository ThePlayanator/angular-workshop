import { LoggerService } from './logger.service';
import { Product } from './product'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    //Injecting the loggerService into the ProductService
    constructor(private loggerService: LoggerService) {
        this.loggerService.logMessage("Product Service Constructed");
    }

    /*     At the moment, we are returning a hard-coded list of products
        In a realistic application scenario, this service would make a call
        to a backend server to retrieve this  */

        public getProducts() {
            this.loggerService.logMessage("Calling getProducts");
    
            let products: Product[];
    
            products = [
                new Product(1, 'Memory Card', 500),
                new Product(2, 'Pen Drive', 750),
                new Product(3, 'Power Bank', 100)
            ]
            this.loggerService.logMessage(products);
    
            return products;
        }
    
}