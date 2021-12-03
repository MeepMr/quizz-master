import { Component, Input } from '@angular/core';
import { ActionQuestion } from '../../../shared/model/question/action-question';

@Component({
  selector: 'app-show-action-question',
  templateUrl: './show-action-question.component.html',
  styleUrls: ['./show-action-question.component.scss']
})
export class ShowActionQuestionComponent {

  @Input() activeActionQuestion: ActionQuestion = new ActionQuestion(-1, '', -1, -1)

  timeOver: boolean = false;
  timerStarted: boolean = false;
  answeredCorrectly?: boolean;

  startTimer(): void {

    this.timerStarted = true;
    setTimeout(() => this.timerOver() , this.activeActionQuestion.time * 1000)
  }

  timerOver(): void {

    this.timeOver = true;
  }

  answerQuestion(successful: boolean) {

    this.activeActionQuestion.answered = true;
    this.answeredCorrectly = successful;
  }
}
