import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { FavouriteService } from './../../services/favourite.service';


@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    // I created a variable to put all the elements or characters from the api in an array.
    character: any;
    // I am created a boolean to put or not info inside of favourite
    isFavourite =false;
    // variable to use to storage the info from each episode by id.
    characterId =null;

    constructor(private activateRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {
        // this funtion exactly as other get the characters from the api and storage them in characterId
        // then take the characterId and storage in an array call character
        this.characterId = this.activateRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            
        });

        // this funtion  to use the method favourite to put the favoutite charaters in a variable Favourite using a favourite service
        this.favouriteService.isFavouriteCharacter(this.characterId).then(isFav => {
            this.isFavourite = isFav;
        });
    }
    
    // Method to put the episode in a favourite variable using the favourite service 
    favouriteCharacter() {
        this.favouriteService.favouriteCharacter(this.characterId).then(() => {
            this.isFavourite = true;
        });
    }

    // Method to remove the episode from favorite using the favourite service 
    unfavouriteCharacter() {
        this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavourite = false;
        });
    }


}
