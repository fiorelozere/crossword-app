import { Component, OnInit } from '@angular/core';
import { level } from './level';
import { GameStore } from './store/game.store';

@Component({
  selector: 'app-crossword-game',
  templateUrl: './crossword-game.page.html',
  styleUrls: ['./crossword-game.page.scss'],
})
export class CrosswordGamePage implements OnInit {

  level = level;
  questionClicked = null;
  questions = {
    horizontal: [
      {
        id: 0,
        questionNumber: 1,
        type: 'horizontal',
        position: { x: 1, y: 0 },
        question: 'Kam',
        response: [ 'K', 'A', 'M', ],
        length: 3
      },
      {
        id: 0,
        questionNumber: 1,
        type: 'question',
        position: { x: 0, y: 0 },
        question: 'Kam',
        response: [ 'K', 'A', 'M', ]
      },
      {
        id: 0,
        questionNumber: 1,
        type: 'question',
        position: { x: 0, y: 0 },
        question: 'Kam',
        response: [ 'K', 'A', 'M', ]
      },
      {
        id: 0,
        questionNumber: 1,
        type: 'question',
        position: { x: 0, y: 0 },
        question: 'Kam',
        response: [ 'K', 'A', 'M', ]
      },
      {
        id: 0,
        questionNumber: 1,
        type: 'question',
        position: { x: 0, y: 0 },
        question: 'Kam',
        response: [ 'K', 'A', 'M', ]
      },
      {
        id: 0,
        questionNumber: 1,
        type: 'question',
        position: { x: 0, y: 0 },
        question: 'Kam',
        response: [ 'K', 'A', 'M', ]
      },
      {
        id: 0,
        questionNumber: 1,
        type: 'question',
        position: { x: 0, y: 0 },
        question: 'Kam',
        response: [ 'K', 'A', 'M', ]
      },
      {
        id: 0,
        questionNumber: 1,
        type: 'question',
        position: { x: 0, y: 0 },
        question: 'Kam',
        response: [ 'K', 'A', 'M', ]
      },
      {
        id: 0,
        questionNumber: 1,
        type: 'question',
        position: { x: 0, y: 0 },
        question: 'Kam',
        response: [ 'K', 'A', 'M', ]
      },
      {
        id: 0,
        questionNumber: 1,
        type: 'question',
        position: { x: 0, y: 0 },
        question: 'Kam',
        response: [ 'K', 'A', 'M', ]
      },
      {
        id: 0,
        questionNumber: 1,
        type: 'question',
        position: { x: 0, y: 0 },
        question: 'Kam',
        response: [ 'K', 'A', 'M', ]
      },
      {
        id: 0,
        questionNumber: 1,
        type: 'question',
        position: { x: 0, y: 0 },
        question: 'Kam',
        response: [ 'K', 'A', 'M', ]
      },

    ],
    vertical: [
      {
        id: 1,
        questionNumber: 3,
        type: 'vertical',
        position: { x: 1, y: 0 },
        question: 'Arme',
        response: [ 'A', 'R', 'M', 'E' ],
        length: 4
      },
      {
        id: 2,
        questionNumber: 4,
        type: 'vertical',
        position: { x: 2, y: 0 },
        question: 'Mar',
        response: [ 'M', 'A', 'R' ]
      },
    ]
  }
  // questionss = [
  //   [
  //     {
  //       id: 0,
  //       questionNumber: 1,
  //       type: 'question',
  //       position: { x: 0, y: 0 },
  //       question: 'Kam',
  //       response: [ 'K', 'A', 'M', ]
  //     },
  //     {
  //       id: 1,
  //       questionNumber: 3,
  //       type: 'vertical',
  //       position: { x: 1, y: 0 },
  //       question: 'Arme',
  //       response: [ 'A', 'R', 'M', 'E' ]
  //     },
  //     {
  //       id: 2,
  //       questionNumber: 4,
  //       type: 'vertical',
  //       position: { x: 2, y: 0 },
  //       question: 'Mar',
  //       response: [ 'M', 'A', 'R' ]
  //     },
  //     {
  //       id: 3,
  //       type: 'block',
  //       position: { x: 3, y: 0 },
  //     }
  //   ],
  //   [
  //     {
  //       id: 4,
  //       questionNumber: 2,
  //       type: 'horizontal',
  //       position: { x: 0, y: 1 },
  //       question: 'Era',
  //       response: [ 'E', 'R', 'A', ]
  //     },
  //     {
  //       id: 5,
  //       type: 'null',
  //       position: { x: 1, y: 1 },
  //     },
  //     {
  //       id: 6,
  //       type: 'null',
  //       position: { x: 2, y: 1 },
  //     },
  //     {
  //       id: 7,
  //       type: 'block',
  //       position: { x: 3, y: 1 },
  //     }
  //   ],
  //   [
  //     {
  //       id: 8,
  //       type: 'null',
  //       position: { x: 0, y: 2 },
  //     },
  //     {
  //       id: 9,
  //       type: 'null',
  //       position: { x: 1, y: 2 },
  //     },
  //     {
  //       id: 10,
  //       type: 'null',
  //       position: { x: 2, y: 2 },
  //     },
  //     {
  //       id: 11,
  //       type: 'vertical',
  //       questionNumber: 5,
  //       position: { x: 3, y: 2 },
  //       question: 'Ne',
  //       response: [ 'N', 'E' ]
  //     }
  //   ],
  //   [
  //     {
  //       id: 12,
  //       type: 'null',
  //       position: { x: 0, y: 3 },
  //     },
  //     {
  //       id: 13,
  //       type: 'null',
  //       position: { x: 1, y: 3 },
  //     },
  //     {
  //       id: 14,
  //       type: 'block',
  //       position: { x: 2, y: 3 },
  //     },
  //     {
  //       id: 15,
  //       type: 'null',
  //       position: { x: 3, y: 3 },
  //     }
  //   ],
  // ];
  constructor(public store: GameStore) { }

  ngOnInit() {
  }

}
