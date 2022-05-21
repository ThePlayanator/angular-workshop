import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './hero';


@Injectable({
    providedIn: 'root'
})
export class LocalAPIService {

    // Use URL for JSON server running locally
    baseURL: string = "http://localhost:3000/heroes";

    // Inject HttpClient as a service via the constructor
    constructor(private http: HttpClient) { }

    // For all the Observables return from the calls to the 
    // HttpClient get method, we type them specifically using
    // either an interface or class

    getSingleHero(heroId: number) : Observable<Hero> {
        let finalUrl = this.baseURL + '/' + heroId;
        console.log("Sending GET request to : ",finalUrl);
        return this.http.get<Hero>(finalUrl);
    }

    getHeroesUsingNames(fName: string, lName: string) : Observable<Hero[]> {
        let queryString = '';

/*         Option 1 for sending query parameters
        Directly append them to the URL string after the ? */
        if (fName) {
            queryString += "firstName=" + fName;
        }
        if (lName) {
            if (fName) {
                queryString += '&';
            }
            queryString += "lastName=" + lName;
        }
        let finalUrl = this.baseURL + '?' + queryString;
        console.log("Sending GET request to : ",finalUrl);
        return this.http.get<Hero[]>(finalUrl);
    }


    getHeroesWithAgeRange(startAge: number, endAge: number) {
        let finalUrl = this.baseURL; 

/*         Option 2 for sending query parameters
        Use the HttpParams class and setter methods */        
        const params = new HttpParams()
        .set('age_gte', startAge)
        .set('age_lte', endAge);
        console.log("Sending GET request to : " + finalUrl + " with parameters " + params);

        return this.http.get<Hero[]>(finalUrl,{params});


    }

    getAllHeroes() : Observable<Hero[]> {
        let finalUrl = this.baseURL; 
        console.log("Sending GET request to : ",finalUrl);
        return this.http.get<Hero[]>(finalUrl);
    }

}
