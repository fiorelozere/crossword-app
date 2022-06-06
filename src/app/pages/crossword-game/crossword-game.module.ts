import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrosswordGamePageRoutingModule } from './crossword-game-routing.module';

import { CrosswordGamePage } from './crossword-game.page';
import { FooterModule } from '../../layout/footer/footer.module';
import { BoardComponent } from './components/board/board.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { GameStore } from './store/game.store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrosswordGamePageRoutingModule,
    FooterModule
  ],
  declarations: [CrosswordGamePage, BoardComponent, QuestionsComponent],
  providers: [GameStore]
})
export class CrosswordGamePageModule {}
