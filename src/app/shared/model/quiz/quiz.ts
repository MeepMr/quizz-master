import {QuizQuestionColumn} from "./quiz-question-column";

export class Quiz {
  id: number;
  columnCount: number;
  columns: QuizQuestionColumn []

  constructor(id: number, columnCount: number) {

    this.id = id;
    this.columnCount = columnCount;
    this.columns = [];
  }
}
