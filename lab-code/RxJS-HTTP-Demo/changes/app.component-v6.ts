import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Hero } from './hero';
import { LocalAPIService } from './localAPIService';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  errorMessage!: string;


  // This is intended to hold a single hero returned from a call to:
  // http://localhost:3000/Heroes/xx
  singleHero!: Hero;
  singleSyncHero$!: Observable<Hero>;

  // This is intended to hold all Heroes returned from a call to:
  // http://localhost:3000/Heroes
  allHeroes: Hero[] = [];
  allSyncHeroes$!: Observable<Hero[]>


  // Inject the service class that implements all the HTTP calls
  constructor(private localAPIService : LocalAPIService) {
  }

  getHeroUsingID(heroId: string) {

    this.errorMessage = "";

/*     For the subscribe method here, we register 3 callbacks 
    to handle emission of normal values, errors and completion of stream */
    this.localAPIService.getSingleHero(parseInt(heroId)).subscribe({

      // Handle successful emissions
      next: (val:Hero) => { 
        // Use the spread operator to clone the val object
        // instead of assigning it directly to singlePost
        this.singleHero = { ...val};
      },

      // Handle errors in response
      error: (errorVal: HttpErrorResponse) => {                              
        console.error('Request failed !');
        this.errorMessage = "The hero with id " + heroId + " does not exist";
        this.singleHero = {
          "id": -1,
          "firstName": "",
          "lastName": "",
          "age" : -1,
          "married" : false,
          "job" : ""
        };
      },

      // Handle completion of stream
      complete : () => {                                   
        console.log('Request completed');       
      }

    });
  }


  retrieveAllHeroes () {

    this.localAPIService.getAllHeroes().subscribe(
      // Register just one callback to handle successful emission 
      // of values (i.e. the returned response)
      (val:Hero[]) => { 
        this.allHeroes = val;
      }
    );

  }

  retrieveAllHeroesAsync() {
    this.allSyncHeroes$ = this.localAPIService.getAllHeroes();
  } 

  getHeroUsingIDAsync(heroId: string) {
    
    this.errorMessage = "";

    // Approach #1: Use getSingleHero
    // This approach will not be able to perform any 
    // error handling
    this.singleSyncHero$ = this.localAPIService.getSingleHero(parseInt(heroId));    

    // Approach #2: Use getSingleHeroAsync
    // This approach will be able to perform some 
    // basic logging of error output to the console

    // Uncomment the block below and comment out the 
    // previous block to try it

/*     try {
      console.log("Making call to getSingleHeroAsync");
      this.singleSyncHero$ = this.localAPIService.getSingleHeroAsync(parseInt(heroId));
      console.log("Completed call to getSingleHeroAsync");

    } catch (err) {
      console.log("Performing error handling functionality");
    } */
    

  }




}


