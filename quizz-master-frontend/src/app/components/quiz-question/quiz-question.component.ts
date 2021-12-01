import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { QuizQuestion } from '../../shared/model/question/quiz-question';
import { MultipleChoiceQuestion } from '../../shared/model/question/multiple-choice-question';
import { QuestionType } from '../../shared/model/question/question-type';
import { ActionQuestion } from '../../shared/model/question/action-question';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit, OnDestroy {

  @Input() activeQuestion?: QuizQuestion | null = new QuizQuestion(-1, '', -1);
  activeMultipleChoiceQuestion?: MultipleChoiceQuestion;
  activeActionQuestion?: ActionQuestion

  ngOnInit(): void {
    if(this.activeQuestion?.questionType === QuestionType.MULTIPLE_CHOICE_QUESTION)
      this.activeMultipleChoiceQuestion = this.activeQuestion as MultipleChoiceQuestion;

    else if(this.activeQuestion?.questionType === QuestionType.ACTION_QUESTION)
      this.activeActionQuestion = this.activeQuestion as ActionQuestion;
  }

  ngOnDestroy(): void {

    if (this.activeQuestion)
      this.activeQuestion.answered = true;
  }
}
