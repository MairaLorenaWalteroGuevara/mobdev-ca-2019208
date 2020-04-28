import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';


@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})


export class CharactersPage implements OnInit {

    // I create a variable type array to put all the elements or characters from the api 
    characters = [];
    // the offset is to start the count of element 0 in the array and the maximum to limited the dowlonload characters to 65
    offset = 0;
    maximumOffset = 65;



    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {

        // run the method loadcharcaters and getting the items from the api. 
        this.loadCharacters();

    }

    loadCharacters(event?) {

        // to get the info using the getCharacters method from the api service  
        //and putting in the characters variable, also I am concatenate the two arrays
        // in order to get 10 elements from the array put in this array  
        this.api.getCharacters(this.offset).subscribe(data => {
            console.log('mydata', data);
            this.characters = this.characters.concat(data);


            if (event) {
                event.target.complete();
            }

        })

    }

    // this is a loadMore method call from the html for the infinitive scroll
    // this method is going to run the method loadCharacters(), getting only 10 character each time
    //and if all the characters are already download the function are disable.
    loadMore(event?) {

        // to set how many characters I want to download each time, in this case 10 
        this.offset = this.offset + 10;
        
        this.loadCharacters(event);

        if (this.offset > this.maximumOffset) {
            event.target.disable = true;
        }
        
    }
    
    // To take the variable from api calle char_id and the router.navigateByUrl is the route path.
    // and activate the open datails. 
    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }

}
