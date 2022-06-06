import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Gesture } from '@ionic/angular';
import { GameStore } from '../../store/game.store';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: [ './board.component.scss' ],
})
export class BoardComponent implements OnInit, AfterViewInit {

  @ViewChild('crossword') crossword: ElementRef;
  @ViewChildren('boxInput') inputs: QueryList<ElementRef>
  responses = [[]];
  validation = [[]];
  highlights = [[]];
  level: any[][] = [[]];

  @Input() set questionClicked(question: any | null) {
    if (question) {
      console.log(question);
      this.setFocusFromClicked(question);
    }
  }

  @Input() set boardLevel(boardLevel: any[][]) {
    this.level = boardLevel;
    this.responses = this.generateEmptyArray(boardLevel.length, boardLevel[0].length, null);
    this.validation = this.generateEmptyArray(boardLevel.length, boardLevel[0].length, -1);
    this.highlights = this.generateEmptyArray(boardLevel.length, boardLevel[0].length, false);
  };



  zoom = 1;
  boxSize = 40;


  showValidations = false;

  constructor(public store: GameStore) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }


  zoomIn() {
    console.log(this.zoom);

    if (this.zoom >= 1.75) {
      return;
    }
    this.zoom = this.zoom + 0.25;
    this.boxSize = 40 * this.zoom;
  }

  zoomOut() {
    console.log(this.zoom)

    if (this.zoom <= 1) {
      return;
    }
    this.zoom = this.zoom - 0.25;
    this.boxSize = 40 * this.zoom;
  }

  generateEmptyArray(rows: number, cols: number, value = null): any[][] {
    return [ ...Array(rows) ].map(e => Array(cols).fill(value));
  }

  onChange(character: string, i: number, j: number) {
    setTimeout(() => {
      this.responses[i][j] =
        character.toUpperCase().length > 1 ?
          character.toUpperCase()[1] :
          character.toUpperCase()[0];
      // const activeQuestion = this.store.activeQuestion;
      // console.log(activeQuestion)
      // const box = this.level[activeQuestion?.position?.x][activeQuestion?.position?.y];
      //   if(activeQuestion.type === 'horizontal' || activeQuestion?.question?.type === 'horizontal') {
      //     if(box.question.length <= i + 1) {
      //       this.inputs.find(input => input.nativeElement.id  === this.level[i + 1][j].id + '').nativeElement.focus();
      //       console.log('h')
      //     }
      //   } else if (activeQuestion.type === 'vertical' || activeQuestion?.question?.type === 'vertical'){
      //     if(box.question.length <= j + 1) {
      //       console.log('v')
      //       this.inputs.find(input => input.nativeElement.id === this.level[i][j + 1].id + '').nativeElement.focus();
      //     } else {
      //     }
      //   }
    });

  }

  setFocusFromClicked(question: any): void {
    this.highlights = this.generateEmptyArray(this.level.length, this.level[0].length, false);
    const row = question.position.y;
    const col = question.position.x;
    console.log(this.level[row][col].type);
    this.inputs.find(i => i.nativeElement.id === this.level[row][col].id.toString())?.nativeElement.focus();
    if (this.level[row][col].type === 'question') {
      for (let i = 0; i < question.length; i++) {
        if (question.type === 'horizontal') {
          this.highlights[row][col + i] = true;
        } else {
          this.highlights[row + i][col] = true;
        }
      }
    }
  }

  onFocus(event, row: number, col: number) {
    // if(this.level[row][col].type === 'question') {
    //   this.store.setActiveQuestion(this.level[row][col]);
    // }
    if(!!this.store.activeQuestion) {
      return;
    }
    this.highlights = this.generateEmptyArray(this.level.length, this.level[0].length, false);
    console.log(event, row, col);
    if (this.level[row][col].type === 'question') {

      for (let i = 0; i < this.level[row][col].question.length; i++) {
        if (this.level[row][col].question.orientation === 'horizontal') {
          this.highlights[row][col + i] = true;
        } else {
          this.highlights[row + i][col] = true;
        }
      }
    } else {
      this.highlights = this.generateEmptyArray(this.level.length, this.level[0].length, false);
    }
  }

  onBlur(event) {
    this.highlights = this.generateEmptyArray(this.level.length, this.level[0].length, false);
    this.store.setActiveQuestion(null);
  }

  checkResponses() {
    let isValid = true;
    this.showValidations = true;
    for (let i = 0; i < this.responses.length; i++) {
      for (let j = 0; j < this.responses[0].length; j++) {
        if (this.level[i][j].type !== 'block') {
          if (this.level[i][j].character.toUpperCase() !== this.responses[i][j]?.toUpperCase()) {
            this.validation[i][j] = 0;
            isValid = false;
          } else {
            this.validation[i][j] = 1;
          }
        }
      }
    }
    console.log(isValid);
    console.log(this.validation);
    setTimeout(() => this.showValidations = false, 2000);
    return isValid;
  }
}
