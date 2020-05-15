import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

    episodes: Observable<any>;
    // the observable it is so important in order to observe the episodes, without this does not work 


    constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
      // to get the info using the getEpisode method from the api service  and putting in the episodes Observable variable 
      this.episodes = this.api.getEpisodes();      
  }

  
    // this method take the variable from api calle episode_id and the router.navigateByUrl is the route path. 
  openDetails(episode){
      let episodeId = episode.episode_id; 
      this.router.navigateByUrl(`/tabs/episodes/${episodeId}`);
  
    }

}