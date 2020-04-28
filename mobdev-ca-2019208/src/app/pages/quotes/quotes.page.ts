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

  initializeItems(){
      this.quotes=this.api.getQuotes(); 
      this.quotes.subscribe(item => {
          this.items=[item];
          // console it is only to check the info in console 
          //console.log( data); 
      });

  }

  //event is the name of the property that i have for this method 
  searchQuote(event){
      const text = event.target.value; 
      this.searchText = text; 
  //   this.searchText = event.detail.value;
    //    const text = event.target.href;
        
    //      this.initializeItems(); 
        
    //  if (text && text.trim()!=''){
    //        this.items=this.items.filter((quote)=>{
    //            return(quote.author.toLowerCase().includes(text.toLowerCase())>-1);
    //        })
    //    }
   
    //  const text = event.target.author; 
    //    if (text && text.trim()!=''){
    //        this.items=this.items.filter((quote)=>{
    //            return(quote.toLowerCase().indexOf(text.toLowerCase())>-1);
     //       })
    //    }
      //this.searchText = text; 
      console.log(text); 
  }
}

