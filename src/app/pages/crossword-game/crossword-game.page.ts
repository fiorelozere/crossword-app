import { Component, OnInit } from '@angular/core';
import { level } from './level';
import { questions } from './questions';
import { GameStore } from './store/game.store';
import { LevelsService } from '../levels/services/levels.service';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap } from 'rxjs/operators';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-crossword-game',
  templateUrl: './crossword-game.page.html',
  styleUrls: [ './crossword-game.page.scss' ],
})
export class CrosswordGamePage implements OnInit {

  level$ = this.route.params.pipe(
    pluck('id'),
    switchMap(id => this.levelsService.getLevelById(id))
  );

  questionClicked = null;
  questions = questions;

  constructor(
    public store: GameStore,
    private levelsService: LevelsService,
    private route: ActivatedRoute,
    private nav: NavController,
    private alertController: AlertController
  ) {
  }

  ngOnInit() {
  }

  async onComplete(levelId: string) {
    this.levelsService.levelCompleted(levelId);
    const alert = await this.alertController.create({
      header: 'Suksese! ',
      message: 'Ju e kompletuat kete nivel',
      buttons: [ 'Ok' ]
    });
    await alert.present();
    this.nav.navigateBack('/levels');

  }

}
