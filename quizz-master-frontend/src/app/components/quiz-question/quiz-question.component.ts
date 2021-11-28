import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {QuizQuestion} from "../../shared/model/quiz/quiz-question";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit, OnDestroy {

  @Input() activeQuestion?: QuizQuestion | null = new QuizQuestion(-1, '', -1);

  ngOnInit(): void {
    const uselessBoolean: boolean = true;
  }

  ngOnDestroy(): void {

    if (this.activeQuestion)
      this.activeQuestion.answered = true;
  }
}
