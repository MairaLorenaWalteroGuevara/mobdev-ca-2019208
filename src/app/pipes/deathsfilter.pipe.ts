// I use the code and create the seach funtion by following this link: 
//https://www.youtube.com/watch?v=T5pdU0s4J6w&t=1551s
//  ionic 4+: Search Bar - Módulos - Filtros   by  Fernando Herrera
// this video is in spanish and also have other video beffore but the first video dont give you a lot of inforamtion.  
// to create the module you have to: 
//1. in your console generate the pipe : ionic g m pipes 
//2. create the folder : ionic g pipe pipes/filter ( or name that you want)
// 3. allow to export the module to other folders, cahnging the pipe.module.ts and adding export the module
// 4. you have to import the module in each page you want to use inside of the module.ts

import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from '@angular/compiler';

// It is a module created to run the transform method to filter the information that 
//I am looking for in my seach bar inside of quotes.html

@Pipe({
  name: 'deathsfilter'
})
export class DeathsfilterPipe implements PipeTransform {

    
  transform( deaths: any[], val: String): any[] {
    
    console.log(deaths);

 //what this method do is taking the input from the search bar (text) 
    // if text does not have information return my normal array with all my deaths, 
    // but if not, this filter takes and return waht match with the input : 
    // so if my array deaths include the input, this return that information from my array. 
    // In this case death.death allow you to look for the words inside of the deaths and 
    // death.cause allow you to look for words inside of the cause or for the death cause. 



    if (val.length===0){return deaths;}
    val = val.toLocaleLowerCase(); 
    return deaths.filter(death =>{
        return death.death.toLocaleLowerCase().includes(val)
        || death.cause.toLocaleLowerCase().includes(val);
      // console.log(keyword);
    });
  }

}