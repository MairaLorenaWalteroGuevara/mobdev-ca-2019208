import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuotesPageRoutingModule } from './quotes-routing.module';

import { QuotesPage } from './quotes.page';

import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    QuotesPageRoutingModule
  ],
  declarations: [QuotesPage]
})
export class QuotesPageModule {}
