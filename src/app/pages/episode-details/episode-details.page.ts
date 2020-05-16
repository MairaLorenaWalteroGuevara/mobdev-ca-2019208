import { FavouriteService } from './../../services/favourite.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { Route } from '@angular/router';

@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

    // I created a variable to put all the elements or episodes from the api in an array. 
    episode: any;
    // I am created a boolean to put or not info inside of favourite
    isFavourite = false;
    // variable to use to storage the info from each episode by id. 
    episodeId = null;

    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }

    ngOnInit() {

        // this funtion exactly as other get the episodes from the api and storage them in EpisodeId
        // then take the episodeId and storage in an array call episode
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
        });

        // this funtion  to use the method favourite to put the favoutite episodes in a variable Favourite using a favourite service
        this.favouriteService.isFavourite(this.episodeId).then(isFav => {
            this.isFavourite = isFav;
        });
    }

    // Method to put the episode  in a favourite variable  using the favourite service 
    favouriteEpisode() {
        this.favouriteService.favouriteEpisode(this.episodeId).then(() => {
            this.isFavourite = true;
        });
    }
    // method to remove the episode from favorite using the favourite service 
    unfavouriteEpisode() {
        this.favouriteService.unfavouriteEpisode(this.episodeId).then(() => {
            this.isFavourite = false;
        });
    }

}
