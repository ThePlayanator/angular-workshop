import { Product } from './product'
import { Injectable } from '@angular/core';

// There are multiple options for providing the
// dependency / service
// Option 3: Specify where the service will be  
// provided in via the @Injectable decorator in the   
// service itself. By default, this will be in the 
// root module
@Injectable({
    providedIn: 'root'
})
export class ProductService {

    /*     At the moment, we are returning a hard-coded list of products
        In a realistic application scenario, this service would make a call
        to a backend server to retrieve this  */

    public getProducts() {

        let products: Product[];

        products = [
            new Product(1, 'Memory Card', 500),
            new Product(2, 'Pen Drive', 750),
            new Product(3, 'Power Bank', 100)
        ]

        return products;
    }
}