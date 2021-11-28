import {QuestionType} from "./question-type";

export class QuizQuestion {

  id: number;
  questionText: String;
  points: number;
  answered: boolean;
  questionType: QuestionType = QuestionType.INVALID;

  constructor(id: number, questionText: String, points: number) {

    this.id = id;
    this.questionText = questionText;
    this.points = points;
    this.answered = false;
  }
}

