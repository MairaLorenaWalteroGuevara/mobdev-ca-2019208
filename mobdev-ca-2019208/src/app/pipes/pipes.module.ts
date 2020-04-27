import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { DeathsfilterPipe } from './deathsfilter.pipe';



@NgModule({
  declarations: [FilterPipe, DeathsfilterPipe],
  exports: [FilterPipe, DeathsfilterPipe]
  // it is necesarry to export the pipe to allow it to be use outside
})
export class PipesModule { }
