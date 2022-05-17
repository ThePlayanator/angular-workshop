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
  // There are multiple options for providing the
  // dependency / service
  // Option 2: Specify in the providers metadata 
  // array of the @NgModule decorator of the root module  
  // The service will now be available to all components
  // and directives within the root module
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
