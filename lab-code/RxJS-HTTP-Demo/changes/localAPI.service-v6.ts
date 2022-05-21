import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable} from 'rxjs';
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

    getSingleHero(heroId: number): Observable<Hero> {
        let finalUrl = this.baseURL + '/' + heroId;
        console.log("Sending GET request to : ", finalUrl);
        return this.http.get<Hero>(finalUrl);
    }

    getAllHeroes(): Observable<Hero[]> {
        let finalUrl = this.baseURL;
        console.log("Sending GET request to : ", finalUrl);
        return this.http.get<Hero[]>(finalUrl);
    }

    getSingleHeroAsync(heroId: number): Observable<Hero> {
        let finalUrl = this.baseURL + '/' + heroId;
        console.log("Sending GET request to : ", finalUrl);
        // We can use the pipe function together with the 
        // catchError operator to provide some basic 
        // error handling functionality
        return this.http.get<Hero>(finalUrl).pipe(
            catchError((err: HttpErrorResponse) => {
                console.error('Error occurred with status code ', err.status);
                throw err;
            })
        );

    }

}
