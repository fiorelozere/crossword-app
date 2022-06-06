import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface GameState {
  activeQuestion: null | any;
}

export const initialState: GameState = {
  activeQuestion: null
};

@Injectable()
export class GameStore extends ComponentStore<GameState>{

  activeQuestion$ = this.select(s => s.activeQuestion);

  constructor() {
    super(initialState);
    this.state$.subscribe(console.log)
  }

  get activeQuestion() {
    return this.get(s => s.activeQuestion);
  }

  setActiveQuestion = (activeQuestion: any | null) => this.patchState({activeQuestion});
}
