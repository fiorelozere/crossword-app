import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {

  @Input() questions!: {horizontal: any[]; vertical: any[]};
  selected = 'horizontal';
  @Output() questionClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  segmentChanged(event) {
    this.selected = event.detail.value;
  }
}
