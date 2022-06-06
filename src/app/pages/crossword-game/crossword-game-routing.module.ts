import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrosswordGamePage } from './crossword-game.page';

const routes: Routes = [
  {
    path: '',
    component: CrosswordGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrosswordGamePageRoutingModule {}
