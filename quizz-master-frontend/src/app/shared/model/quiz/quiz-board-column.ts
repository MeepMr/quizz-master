import { QuizQuestion } from '../question/quiz-question';

export class QuizBoardColumn {

  id: number;
  rowCount: number;
  questions: QuizQuestion []
  columnName: String;

  constructor(id: number, columnName: String) {
    this.id = id;
    this.rowCount = 0;
    this.questions = [];
    this.columnName = columnName;
  }

  addQuestion(question: QuizQuestion): void {

    this.rowCount++;
    this.questions.push(question);
  }
}
