import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// It is a service created to get all the information from http://breakingbadapi/ 
// I created a method for each topic that I want to get from the api


@Injectable({
    providedIn: 'root'
})
export class ApiService {


    constructor(private http: HttpClient) { }

    getEpisodes() {
        // this <[]> it is to get the information inseide of an array
        return this.http.get<[]>(`https://www.breakingbadapi.com/api/episodes`);
    }

    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }

    getCharacters(offset) {
        // in Characters we want to get 10 characters each time we scroll the funtion scrolll, 
        // this information I got it from breaking bad api webside documentation limit and offset 
        // I am gonna get arrays of 10 characters to use in my scroll created in characters.ts 
        return this.http.get<[]>(`https://www.breakingbadapi.com/api/characters?limit=10&offset=${offset}`)

    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }

    getQuotes() {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes`);
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }
    getDeaths() {
        return this.http.get(`https://www.breakingbadapi.com/api/deaths`);
    }

    getDeath(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/deaths/${id}`);
    }

}