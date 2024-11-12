import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  // Need to include this in order for the HttpClient
  // in fakeAPI  service to work properly
  providers: [provideRouter(routes), provideHttpClient()]
};
