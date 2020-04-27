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

    character: any;
    isFavourite =false;
    characterId =null;

    constructor(private activateRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {
        this.characterId = this.activateRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            
        });

        this.favouriteService.isFavouriteCharacter(this.characterId).then(isFav => {
            this.isFavourite = isFav;
        });
    }

    favouriteCharacter() {
        this.favouriteService.favouriteCharacter(this.characterId).then(() => {
            this.isFavourite = true;
        });
    }

    unfavouriteCharacter() {
        this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavourite = false;
        });
    }


}
