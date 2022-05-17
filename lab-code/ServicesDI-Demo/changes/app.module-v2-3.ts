import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  // The service is not registered in the providers 
  // array here or in any of the components.
  // This means the service itself must register 
  // itself as a dependency.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
