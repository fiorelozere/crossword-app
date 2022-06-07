import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelsPageRoutingModule } from './levels-routing.module';

import { LevelsPage } from './levels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelsPageRoutingModule,
  ],
  declarations: [LevelsPage]
})
export class LevelsPageModule {}
