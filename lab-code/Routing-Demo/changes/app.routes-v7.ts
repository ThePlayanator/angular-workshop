import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroComponent } from './hero/hero.component';
import { NewsComponent } from './news/news.component';
import { BoringNewsComponent } from './boring-news/boring-news.component';
import { ExcitingNewsComponent } from './exciting-news/exciting-news.component';

export const routes: Routes = [
    // Now all routes have titles associated
    // with their component pages
   
    {path: 'home', title: 'Cool App: Home', component: HomeComponent},
    {path: 'about', title: 'Cool App: About', component: AboutComponent},
    {path: 'contact', title: 'Cool App: Contact', component: ContactComponent},

    // Specifies 2 dynamic route parameters to send to this component
    { path: 'hero/:id/:firstname', component: HeroComponent},  
    
    // Specifies nested / child routes
    // Parent route / component is NewsComponent
    // Child routes / components are ExcitingNewsComponent 
    // and BoringNewsComponent
    {path: 'news', title: 'Cool App: News', component: NewsComponent, children: [
      {path: 'exciting/:framework', component: ExcitingNewsComponent},
      {path: 'boring', component: BoringNewsComponent},
    ]},
  
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}


  ];
