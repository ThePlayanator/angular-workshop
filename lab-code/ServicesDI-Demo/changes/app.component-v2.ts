
import { Component } from '@angular/core';

import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // There are multiple options for providing the
  // dependency / service
  // Option 1: Specify in the providers metadata 
  // array of the @Component decorator
  // This makes the service available to this component
  // and all its child components in the component tree
  providers: [ProductService]
})

export class AppComponent {

  products: Product[] = [];

/*   We use constructor injection as the mechanism
  to introduce the service (or dependency) into 
  the class */
  constructor(private productService: ProductService) {
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

}