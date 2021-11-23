import {Component, Input, OnInit} from '@angular/core';
import {QuizBoardColumn} from "../../../shared/model/quiz/quiz-board-column";

@Component({
  selector: 'app-quiz-board-column',
  templateUrl: './quiz-board-column.component.html',
  styleUrls: ['./quiz-board-column.component.scss']
})
export class QuizBoardColumnComponent implements OnInit {

  constructor() { }

  @Input() column?: QuizBoardColumn;

  ngOnInit(): void {
  }

}
