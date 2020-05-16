import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

    // create a quotes variable to storage all the elements from the apiservice from http://breakingbad.api
    deaths: Observable<any>;
    // variable type array to storage all my variables deaths
    newDeaths: any[] = [];
    // variable to storage the text from the input in the searchbar from my html 
    searchText1 = '';

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {

        this.initializeItems();
    }

    initializeItems() {
        // get the info in deaths using the api service and putting in the deaths variable 
        this.deaths = this.api.getDeaths();
        // I am subscribe is a method that comes from rxjs library 
        this.deaths.subscribe(newdeath => {
            // Subscribe call the observable and this.newDeaths = [] put the staff inside of the observable inside of the array
            this.newDeaths = [newdeath];
            // console it is only to check the info in console 
            //console.log( newdeath); 
        });
    }

    //event is the name of the property that i have for this method 
    searchDeath(event) {
        // value is the variable  of the input from the user in the browser
        //event target value returns the element of the input
        // I am taking this constant, then this has been storage  in searchtext finally  I am using searchText in the search filter in html. 

        const text = event.target.value;
        this.searchText1 = text;

        console.log(text);
    }
}
