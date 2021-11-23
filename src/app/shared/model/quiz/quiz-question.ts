export class QuizQuestion {

  id: number;
  questionText: String;
  type: QuestionType;
  points: number;
  answered: boolean;

  constructor(id: number, questionText: String, type: QuestionType, points: number) {

    this.id = id;
    this.questionText = questionText;
    this.type = type;
    this.points = points;
    this.answered = false;
  }
}

export enum QuestionType {
  MULTIPLE_CHOICE,
  ACTION
}
