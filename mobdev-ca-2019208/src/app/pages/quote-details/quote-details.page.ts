import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {
    
    // I using quote variable to storage  all the quoteId in the array.
     quote: any; 
    // I am creating a quoteId variable to storage all the info from the http.api.
    quoteId=null; 

  constructor(private activatedRoute: ActivatedRoute, private api:ApiService) { }

  ngOnInit() {
      this.quoteId= this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getQuote(this.quoteId).subscribe(res => {
      this.quote = res[0];
      console.log(JSON.stringify(this.quote.quote_id));
    });
 
  }

}

