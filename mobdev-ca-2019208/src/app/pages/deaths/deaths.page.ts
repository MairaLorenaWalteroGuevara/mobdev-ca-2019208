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

    deaths: Observable<any>;
    // variable type array 
    newDeaths: any[]=[]; 
    // variable for the input from the browser 
    searchText1=''; 

  constructor(private router: Router, private api:ApiService) { }

  ngOnInit() {
      
      this.initializeItems();
  }

initializeItems(){
      this.deaths=this.api.getDeaths(); 
      this.deaths.subscribe(newdeath => {
          this.newDeaths=[newdeath];
          // console it is only to check the info in console 
          //console.log( data); 
      });
    }

  //event is the name of the property that i have for this method 
  searchDeath(event){
      const text = event.target.value; 
      this.searchText1 = text; 

      console.log(text); 
  }
}
