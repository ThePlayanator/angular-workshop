import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ProductService } from './product.service';

export const appConfig: ApplicationConfig = {

  // This makes Product service available to all components
  // directives and pipes
  providers: [provideRouter(routes), {provide: ProductService}]

};
