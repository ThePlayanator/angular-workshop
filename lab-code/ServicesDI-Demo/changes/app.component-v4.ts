import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './product.service';
import { Product } from './product';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstChildComponent, SecondChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  products: Product[] = [];

  // Alternative inject method available in Angular 17
  // to inject a service dependency for use in a component
  private productService = inject(ProductService);

  // We no longer use this
  // constructor(private productService: ProductService) {
  // }

  getProducts() {
    this.products = this.productService.getProducts();
  }

}
