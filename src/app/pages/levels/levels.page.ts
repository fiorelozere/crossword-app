import { Component, OnInit } from '@angular/core';
import { LevelsService } from './services/levels.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.page.html',
  styleUrls: ['./levels.page.scss'],
})
export class LevelsPage implements OnInit {

  levels$ = this.levelsService.getLevels();

  constructor(
    private levelsService: LevelsService,
    public nav: NavController
  ) { }

  ngOnInit() {
  }

}
