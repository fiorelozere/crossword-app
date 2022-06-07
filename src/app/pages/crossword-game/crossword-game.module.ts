import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrosswordGamePage } from './crossword-game.page';
import { BoardComponent } from './components/board/board.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { GameStore } from './store/game.store';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CrosswordGamePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ CrosswordGamePage, BoardComponent, QuestionsComponent ],
  providers: [ GameStore ]
})
export class CrosswordGamePageModule {
}
