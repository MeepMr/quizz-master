import { Component, Input } from '@angular/core';
import { QuizQuestion } from '../../../shared/model/question/quiz-question';

@Component({
  selector: 'app-quiz-board-question',
  templateUrl: './quiz-board-question.component.html',
  styleUrls: ['./quiz-board-question.component.scss']
})
export class QuizBoardQuestionComponent {

  @Input() question: QuizQuestion = new QuizQuestion(-1, '', -1);

}
