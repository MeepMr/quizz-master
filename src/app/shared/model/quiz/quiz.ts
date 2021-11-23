import {QuizBoardColumn} from "./quiz-board-column";

export class Quiz {
  id: number;
  columnCount: number;
  columns: QuizBoardColumn []

  constructor(id: number) {

    this.id = id;
    this.columnCount = 0;
    this.columns = [];
  }

  public addColumn(column: QuizBoardColumn): void {

    this.columnCount++;
    this.columns.push(column);
  }
}
