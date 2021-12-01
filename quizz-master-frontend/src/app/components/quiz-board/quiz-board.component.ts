import { Component, Input } from '@angular/core';
import { Quiz } from '../../shared/model/quiz/quiz';

@Component({
  selector: 'app-quiz-board',
  templateUrl: './quiz-board.component.html',
  styleUrls: ['./quiz-board.component.scss']
})
export class QuizBoardComponent {

  @Input() activeQuiz?: Quiz | null;
}
