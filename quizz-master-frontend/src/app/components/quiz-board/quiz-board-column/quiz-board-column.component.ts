import { Component, Input } from '@angular/core';
import { QuizBoardColumn } from '../../../shared/model/quiz/quiz-board-column';

@Component({
  selector: 'app-quiz-board-column',
  templateUrl: './quiz-board-column.component.html',
  styleUrls: ['./quiz-board-column.component.scss']
})
export class QuizBoardColumnComponent {

  @Input() column: QuizBoardColumn = new QuizBoardColumn(-1, '');

}
