import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathsPageRoutingModule } from './deaths-routing.module';

import { DeathsPage } from './deaths.page';

import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    DeathsPageRoutingModule
  ],
  declarations: [DeathsPage]
})
export class DeathsPageModule {}
