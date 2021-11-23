import {QuizQuestionColumn} from "./quiz-question-column";

export class Quiz {
  id: number;
  columnCount: number;
  columns: QuizQuestionColumn []

  constructor(id: number) {

    this.id = id;
    this.columnCount = 0;
    this.columns = [];
  }

  public addColumn(column: QuizQuestionColumn): void {

    this.columnCount++;
    this.columns.push(column);
  }
}
