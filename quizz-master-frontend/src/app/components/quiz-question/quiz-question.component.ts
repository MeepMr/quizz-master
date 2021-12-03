import {Component, Input, OnInit} from '@angular/core';
import {QuizQuestion} from '../../shared/model/question/quiz-question';
import {MultipleChoiceQuestion} from '../../shared/model/question/multiple-choice-question';
import {QuestionType} from '../../shared/model/question/question-type';
import {ActionQuestion} from '../../shared/model/question/action-question';
import {YesNoQuestion} from "../../shared/model/question/yes-no-question";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  @Input() activeQuestion?: QuizQuestion | null = new QuizQuestion(-1, '', -1);

  activeMultipleChoiceQuestion?: MultipleChoiceQuestion;
  activeActionQuestion?: ActionQuestion;
  activeYesNoQuestion?: YesNoQuestion;

  ngOnInit(): void {

    switch (this.activeQuestion?.questionType) {
      case QuestionType.MULTIPLE_CHOICE_QUESTION:
        this.activeMultipleChoiceQuestion = this.activeQuestion as MultipleChoiceQuestion;
        break;
      case QuestionType.ACTION_QUESTION:
        this.activeActionQuestion = this.activeQuestion as ActionQuestion;
        break;
      case QuestionType.YES_NO_QUESTION:
        this.activeYesNoQuestion = this.activeQuestion as YesNoQuestion;
    }

  }

}
