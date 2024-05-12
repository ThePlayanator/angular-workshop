import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  products: Product[] = [];
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  getProducts() {

    this.products = this.productService.getProducts();
  }

}
