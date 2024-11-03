import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './hero';


@Injectable({
    providedIn: 'root'
})
export class LocalAPIService {

    // Use URL for JSON server running locally
    baseUrl: string = "http://localhost:3000/heroes";

    // Inject HttpClient as a service via the constructor
    constructor(private http: HttpClient) { }

    // For all the Observables return from the calls to the 
    // HttpClient get method, we type them specifically using
    // either an interface or class

    getSingleHero(heroId: number): Observable<Hero> {
        let finalUrl = this.baseUrl + '/' + heroId;
        console.log("Sending GET request to : ", finalUrl);
        return this.http.get<Hero>(finalUrl);
    }


    getAllHeroes(): Observable<Hero[]> {
        let finalUrl = this.baseUrl;
        console.log("Sending GET request to : ", finalUrl);
        return this.http.get<Hero[]>(finalUrl);
    }
    
    // When we use the option observe: 'response', we will be able to
    // get access to the entire HTTP response, and not just the body
    // so the return type is HTTPResponse, with any indicating
    // the type of JSON in the response body, which we are not 
    // interested for the case of a POST
    submitNewHero(newHero: Hero): Observable<HttpResponse<any>> {
        let finalUrl = this.baseUrl;
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(newHero);
        return this.http.post(finalUrl, body, { 'headers': headers, observe: 'response' });
    }

    // Same comments as for the case of a post request in submitNewHero
    modifyExistingHero(existingHero: Hero) : Observable<HttpResponse<any>> {

        // For PUT, we need to additionally specify the id of a resource that we 
        // are modifying at the end of the URL
        let finalUrl = this.baseUrl + "/" + existingHero.id;

        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(existingHero);
        return this.http.put(finalUrl, body, { 'headers': headers, observe: 'response' });
    }

}
