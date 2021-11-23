import {Component, Input, OnInit} from '@angular/core';
import {QuizQuestion} from "../../../shared/model/quiz/quiz-question";

@Component({
  selector: 'app-quiz-board-question',
  templateUrl: './quiz-board-question.component.html',
  styleUrls: ['./quiz-board-question.component.scss']
})
export class QuizBoardQuestionComponent implements OnInit {

  constructor() { }

  @Input() question?: QuizQuestion;

  ngOnInit(): void {
  }

}
