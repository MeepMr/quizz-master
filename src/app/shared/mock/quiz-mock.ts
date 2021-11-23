import {Quiz} from "../model/quiz/quiz";
import {QuizBoardColumn} from "../model/quiz/quiz-board-column";
import {QuestionType, QuizQuestion} from "../model/quiz/quiz-question";

export class QUIZ_MOCK {

  quiz_id_counter: number = 0;
  column_id_counter: number = 0;
  question_id_counter: number = 0;

  quiz1: Quiz;
  quiz2: Quiz;
  quiz3: Quiz;
  quiz4: Quiz;
  quiz5: Quiz;
  quiz6: Quiz;

  constructor() {

    this.quiz1 = new Quiz(this.quiz_id_counter++);
    this.quiz1.addColumn(new QuizBoardColumn(this.column_id_counter++, 'Test'));
    this.quiz1.addColumn(new QuizBoardColumn(this.column_id_counter++, 'Col'));
    this.quiz1.addColumn(new QuizBoardColumn(this.column_id_counter++, 'Heart'));
    this.quiz1.addColumn(new QuizBoardColumn(this.column_id_counter++, 'Broken'));
    this.quiz1.addColumn(new QuizBoardColumn(this.column_id_counter++, 'Single'));
    this.quiz1.addColumn(new QuizBoardColumn(this.column_id_counter++, 'End'));

    this.quiz2 = new Quiz(this.quiz_id_counter++);
    this.addMockColumns(this.quiz2, 5)

    this.quiz3 = new Quiz(this.quiz_id_counter++);
    this.addMockColumns(this.quiz3, 4)

    this.quiz4 = new Quiz(this.quiz_id_counter++);
    this.addMockColumns(this.quiz4, 3)

    this.quiz5 = new Quiz(this.quiz_id_counter++);
    this.addMockColumns(this.quiz5, 2)

    this.quiz6 = new Quiz(this.quiz_id_counter++);
    this.addMockColumns(this.quiz6, 1)
  }

  private addMockColumns(quiz: Quiz, amount: number): void {

    for(let i = 0; i < amount; i++) {
      let tempColumn = new QuizBoardColumn(this.column_id_counter++, `Column ${i}`);

      for (let j = 0; j < amount; j++) {

        tempColumn.addQuestion(new QuizQuestion(this.question_id_counter++, `Question Number; ${this.question_id_counter}`, QuestionType.MULTIPLE_CHOICE, j*10))
      }

      quiz.addColumn(tempColumn);
    }
  }

  getMockData(): Quiz[] {

    return [
      this.quiz1,
      this.quiz2,
      this.quiz3,
      this.quiz4,
      this.quiz5,
      this.quiz6,
    ]
  }
}
