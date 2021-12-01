import { Component, Input } from '@angular/core';
import { Quiz } from '../../shared/model/quiz/quiz';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent {

  @Input() quiz?: Quiz;
}
