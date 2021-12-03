import { QuizQuestion } from './quiz-question';
import { QuestionType } from './question-type';

export class YesNoQuestion extends QuizQuestion {

  correct: boolean;

  constructor(id: number, questionText: String, points: number, correct: boolean = true) {
    super(id, questionText, points);
    this.questionType = QuestionType.YES_NO_QUESTION;
    this.correct = correct;
  }
}
