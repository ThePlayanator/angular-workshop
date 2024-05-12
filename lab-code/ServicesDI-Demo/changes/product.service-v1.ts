import { Product } from './product'


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