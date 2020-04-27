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

  //  @ViewChild(IonInfiniteScroll, {static:false}) infiniteScroll:IonInfiniteScroll;
   // characters: Observable<any>; 
   // data : Observable<any>; 
    
    characters= []; 
    //numeros= []; 
    offset=0; 
    maximumOffset=65;
  //  maximumPages = 4; 


  constructor(private router:Router, private api:ApiService) { }

  ngOnInit() {
    //  this.characters=this.api.getCharacters(this.page); 
    //  this.characters.subscribe(data => {
   //       console.log(data); 
   
   
   // this.characters=this.api.getCharacters(this.page);
   //    this.characters.subscribe(data => {
    //    console.log('mydata',data); 
    //      this.results = data;
     //     this.numeros=this.numeros.concat(this.results);
     //   console.log(this.numeros);
   // });


    this.loadCharacters(); 
  
}
   
  loadCharacters(event?){
     
   // if (loadMore){
     //  this.offset +=10; 
 //   console.log(this.page); 
   // }
    this.api.getCharacters(this.offset).subscribe(data => {
        console.log('mydata',data); 
        this.characters=this.characters.concat(data);
        //    this.results = data;
        //    this.numeros=this.numeros.concat(this.results);
            //console.log(this.numeros);
        
        if (event){
         event.target.complete();
        }


    })

    


}
  //    this.api.getCharacters(this.page).subscribe(res =>{
        //console.log(res);
   //      this.characters = this.characters.concat(this.character); 
      
    //  if (event){
    //      event.target.complete(); 
    //  }
    //  });
 // }
  //loadCharacters(loadMore=false){

   // if (loadMore){
   //     this.offset +=20; 
   //     console.log(this.offset); 
   // }

  //    this.api.getCharacters(this.page).subscribe(res =>{
   //     console.log(res);
   //      this.characters = this.characters.concat(res['data']); 
   //   });
  //}

  loadMore(event?){
     // this.offset++; 
    
      console.log(event);

      this.offset = this.offset + 10; 

         this.loadCharacters(event);

     if (this.offset> this.maximumOffset){
         event.target.disable = true; 
     }
    //      event.target.disabled = true; 
    //  }

    //  setTimeout(() => {
     //       event.target.complete(this.loadCharacters(event));
     //       if (this.numeros.length > 63) {
     //           event.target.disabled = true;
     //       }
    //    }, 500);


     
      
    //  this.page++;
    //  this.loadCharacters(event);
      
    //  if(this.page===this.maximumPages){
     //     event.target.disabled = true; 
      }
  //}
  //loadMore(event){
  //    setTimeout(()=>{
  //        event.target.complete(this.loadCharacters(event));
  //        if (this.characters.length>58){
  //            event.target.disabled =true; 
  //        }
  //    },500);
  //}

  openDetails(character){
      let characterId = character.char_id; 
      this.router.navigateByUrl(`/tabs/characters/${characterId}`);
  }

}
