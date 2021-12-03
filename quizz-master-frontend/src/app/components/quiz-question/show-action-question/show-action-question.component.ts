import { Component, Input } from '@angular/core';
import { ActionQuestion } from '../../../shared/model/question/action-question';
import {BehaviorSubject} from "rxjs";

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

  initialTime$: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  startTimer(): void {

    this.timerStarted = true;
    this.initialTime$.next(this.activeActionQuestion.time)
    this.activeActionQuestion.answered = true;
  }

  timerOver(): void {

    this.timeOver = true;
  }

  answerQuestion(successful: boolean) {

    this.answeredCorrectly = successful;
  }
}
