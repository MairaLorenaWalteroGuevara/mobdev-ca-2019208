import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
  styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {

    // cteate a quotes varible to storage all the elements from the apiservice from http://breakingbad.api 
    quotes: Observable<any>;

    // Ad array to storage all my varibles quotes 
    items: any[] =[]; 
    // variable to storage the text writing in the searchbar from my html 
    searchText='';

  constructor(private router:Router, private api:ApiService) { }

  ngOnInit() {
      // this is to call and get the htttp
      
      this.initializeItems(); 
  }
  
  // Open the details page from the quotes 
  openDetails(quotes){
      let quotesId = quotes.quote_id; 
      this.router.navigateByUrl(`/tabs/quotes/${quotesId}`);
  }

//this method get the storage the inforamtion inside of quotes variable using the api service
// Subscribe is a method that comes from rxjs library 
// Subscribe call the observable and this.items = [], take the staff inside of the observable an put inside of the array

  initializeItems(){
      this.quotes=this.api.getQuotes(); 
      this.quotes.subscribe(item => {
          this.items=[item];
          // console it is only to check the info in console 
          //console.log( data); 
      });

  }
  // for this method // it is necessary to import the pipe module in module.ts
  //event is the name of the property that i have for this method 
  searchQuote(event){
      //value is the variable  of the input from the user in the browser
    //event target value returns the element from the input

      const text = event.target.value; 
      this.searchText = text; 
 // I am taking "text" constant and storage in searchtext in order to use it in the search filter in the html. 
      console.log(text); 
  }
}

