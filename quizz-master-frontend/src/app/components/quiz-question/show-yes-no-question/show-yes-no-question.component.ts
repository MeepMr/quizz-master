import { Component, Input } from '@angular/core';
import { YesNoQuestion } from '../../../shared/model/question/yes-no-question';

@Component({
  selector: 'app-show-yes-no-question',
  templateUrl: './show-yes-no-question.component.html',
  styleUrls: ['./show-yes-no-question.component.scss']
})
export class ShowYesNoQuestionComponent {

  @Input() activeYesNoQuestion: YesNoQuestion = new YesNoQuestion(-1, '', -1);

  answered: boolean = false;
  answeredCorrectly: boolean = false;
  answer?: boolean;

  answerQuestion(answer: boolean): void {
    this.answeredQuestion();
    this.answer = answer;
    this.answeredCorrectly = answer === this.activeYesNoQuestion.correct;
  }

  private answeredQuestion(): void {

    this.answered = true;
    this.activeYesNoQuestion.answered = true;
  }
}
