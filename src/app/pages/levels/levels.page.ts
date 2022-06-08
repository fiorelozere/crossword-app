import { Component, OnInit } from '@angular/core';
import { LevelsService } from './services/levels.service';
import { NavController, ViewWillEnter } from '@ionic/angular';
import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: [ './levels.page.scss' ],
})
export class LevelsPage implements ViewWillEnter {

  levels$ =  this.levelsService.getLevels().pipe(tap(console.log));
  levelStatuses = [];

  constructor(
    private levelsService: LevelsService,
    public nav: NavController
  ) {
  }

  ionViewWillEnter() {
    this.levelsService.getLevelStatuses().pipe(take(1)).subscribe(res => this.levelStatuses = res);
  }

  isCompleted(levelId): boolean {
    return this.levelStatuses.some(ls => ls.levelId === levelId);
  }
}
