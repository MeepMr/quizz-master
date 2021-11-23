import {QuizQuestion} from "./quiz-question";

export class QuizBoardColumn {

  id: number;
  rowCount: number;
  questions: QuizQuestion []

  constructor(id: number) {
    this.id = id;
    this.rowCount = 0;
    this.questions = [];
  }

  public addQuestion(question: QuizQuestion): void {

    this.rowCount++;
    this.questions.push(question);
  }
}
