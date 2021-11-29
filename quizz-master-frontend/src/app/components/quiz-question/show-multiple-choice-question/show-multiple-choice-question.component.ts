import {Component, Input} from '@angular/core';
import {MultipleChoiceQuestion} from '../../../shared/model/question/multiple-choice-question';

@Component({
  selector: 'app-show-multiple-choice-question',
  templateUrl: './show-multiple-choice-question.component.html',
  styleUrls: ['./show-multiple-choice-question.component.scss']
})
export class ShowMultipleChoiceQuestionComponent {

  @Input() activeMultipleChoiceQuestion: MultipleChoiceQuestion = new MultipleChoiceQuestion(-1, '', -1, [])

  answered: boolean = false;
  correctAnswered: boolean = false;
  selectedAnswer: String = '';

  clickedAnswer(answer: String): void {
    this.activeMultipleChoiceQuestion.answered = true;
    this.answered = true;
    this.correctAnswered = this.activeMultipleChoiceQuestion.correctAnswer === answer;
    this.selectedAnswer = answer;
  }
}
