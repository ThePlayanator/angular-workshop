import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},

/*     The pathMatch  property instructs Angular on 
    how much of the URL to match. Setting the property 
    to full is a recommended strategy when you have an 
    empty string for a path. */

    {path: '', redirectTo: 'home', pathMatch: 'full'},

    /* The wildcard pattern ** for the route essentially matches 
    any path prefix. Any route that does not match an earlier existing 
    route in the configuration above will use this route. */

    {path: '**', component: PageNotFoundComponent}

    /* The order of your routes specified in this array is important, 
    as Angular uses the first matching route it finds. This is why
    the wildcard route is placed at the end of the array. */


  ];
