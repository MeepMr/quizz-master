import { QuizQuestion } from './quiz-question';
import { QuestionType } from './question-type';

export class YesNoQuestion extends QuizQuestion {

  constructor(id: number, questionText: String, points: number) {
    super(id, questionText, points);
    this.questionType = QuestionType.YES_NO_QUESTION;
  }
}
