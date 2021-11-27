export class QuizQuestion {

  id: number;
  questionText: String;
  points: number;
  answered: boolean;

  constructor(id: number, questionText: String, points: number) {

    this.id = id;
    this.questionText = questionText;
    this.points = points;
    this.answered = false;
  }
}

