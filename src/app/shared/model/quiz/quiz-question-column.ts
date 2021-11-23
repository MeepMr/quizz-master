import {QuizQuestion} from "./quiz-question";

export class QuizQuestionColumn {

  id: number;
  rowCount: number;
  questions: QuizQuestion []

  constructor(id: number, rowCount: number) {
    this.id = id;
    this.rowCount = rowCount
    this.questions = [];
  }
}
