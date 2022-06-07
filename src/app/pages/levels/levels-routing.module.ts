import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelsPage } from './levels.page';

const routes: Routes = [
  {
    path: '',
    component: LevelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelsPageRoutingModule {}
