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

    episode: any; 
    isFavourite =false; 
    episodeId=null; 

  constructor(private activatedRoute: ActivatedRoute, private api:ApiService, private favouriteService: FavouriteService ) { }

  ngOnInit() {
      this.episodeId= this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getEpisode(this.episodeId).subscribe(res => {
      this.episode = res[0];
    });
 
    this.favouriteService.isFavourite(this.episodeId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 
  favouriteEpisode() {
    this.favouriteService.favouriteEpisode(this.episodeId).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavouriteEpisode() {
    this.favouriteService.unfavouriteEpisode(this.episodeId).then(() => {
      this.isFavourite = false;
    });
  }
 
}
