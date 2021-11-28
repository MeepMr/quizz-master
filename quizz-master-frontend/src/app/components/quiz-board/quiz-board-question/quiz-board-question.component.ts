import {Component, Input, OnInit} from '@angular/core';
import {QuizQuestion} from '../../../shared/model/question/quiz-question';

@Component({
  selector: 'app-quiz-board-question',
  templateUrl: './quiz-board-question.component.html',
  styleUrls: ['./quiz-board-question.component.scss']
})
export class QuizBoardQuestionComponent implements OnInit {

  @Input() question: QuizQuestion = new QuizQuestion(-1, '', -1);

  ngOnInit(): void {
    const uselessBoolean: boolean = true;
  }
}
