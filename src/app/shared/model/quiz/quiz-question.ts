export class QuizQuestion {

  id: number;
  questionText: String;
  type: QuestionType;
  points: number

  constructor(id: number, questionText: String, type: QuestionType, points: number) {

    this.id = id;
    this.questionText = questionText;
    this.type = type;
    this.points = points;
  }
}

export enum QuestionType {
  MULTIPLE_CHOICE,
  ACTION
}
