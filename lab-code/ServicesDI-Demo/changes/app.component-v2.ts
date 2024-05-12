import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
  // Registering the service directly 
  // in the component itself 
  // via the providers array metadata
  
  providers: [ProductService],
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
