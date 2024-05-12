import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ProductService } from './product.service';

export const appConfig: ApplicationConfig = {

  //  We are no longer registering the service here
  providers: [provideRouter(routes)]

};
