import {Quiz} from '../model/quiz/quiz';
import {QuizBoardColumn} from '../model/quiz/quiz-board-column';
import {QuizQuestion} from '../model/quiz/quiz-question';
import {QUESTION_MOCK} from "./question-mock";

export class QUIZ_MOCK {

  quiz_id_counter: number = 0;
  column_id_counter: number = 0;
  question_id_counter: number = 0;

  questionMock: QUESTION_MOCK;

  quiz1: Quiz;
  quiz2: Quiz;
  quiz3: Quiz;
  quiz4: Quiz;
  quiz5: Quiz;
  quiz6: Quiz;

  constructor() {

    this.quiz1 = new Quiz(this.quiz_id_counter++);
    this.questionMock = new QUESTION_MOCK(this.question_id_counter);

    const column_1_1: QuizBoardColumn = new QuizBoardColumn(this.column_id_counter++, 'Advent');
    column_1_1.addQuestion(this.questionMock.question1_1);
    column_1_1.addQuestion(this.questionMock.question1_2);
    column_1_1.addQuestion(this.questionMock.question1_3);
    column_1_1.addQuestion(this.questionMock.question1_4);
    column_1_1.addQuestion(this.questionMock.question1_5);
    this.quiz1.addColumn(column_1_1);

    const column_1_2: QuizBoardColumn = new QuizBoardColumn(this.column_id_counter++, 'Weihnachtsgeschichte');
    column_1_2.addQuestion(this.questionMock.question2_1);
    column_1_2.addQuestion(this.questionMock.question2_2);
    column_1_2.addQuestion(this.questionMock.question2_3);
    column_1_2.addQuestion(this.questionMock.question2_4);
    column_1_2.addQuestion(this.questionMock.question2_5);
    this.quiz1.addColumn(column_1_2);

    const column_1_3: QuizBoardColumn = new QuizBoardColumn(this.column_id_counter++, 'Brauchtum');
    column_1_3.addQuestion(this.questionMock.question3_1);
    column_1_3.addQuestion(this.questionMock.question3_2);
    column_1_3.addQuestion(this.questionMock.question3_3);
    column_1_3.addQuestion(this.questionMock.question3_4);
    column_1_3.addQuestion(this.questionMock.question3_5);
    this.quiz1.addColumn(column_1_3);

    const column_1_4: QuizBoardColumn = new QuizBoardColumn(this.column_id_counter++, 'Musik');
    column_1_4.addQuestion(this.questionMock.question4_1);
    column_1_4.addQuestion(this.questionMock.question4_2);
    column_1_4.addQuestion(this.questionMock.question4_3);
    column_1_4.addQuestion(this.questionMock.question4_4);
    column_1_4.addQuestion(this.questionMock.question4_5);
    this.quiz1.addColumn(column_1_4);

    const column_1_5: QuizBoardColumn = new QuizBoardColumn(this.column_id_counter++, 'A-Z');
    column_1_5.addQuestion(this.questionMock.question5_1);
    column_1_5.addQuestion(this.questionMock.question5_2);
    column_1_5.addQuestion(this.questionMock.question5_3);
    column_1_5.addQuestion(this.questionMock.question5_4);
    column_1_5.addQuestion(this.questionMock.question5_5);
    this.quiz1.addColumn(column_1_5);

    this.question_id_counter = this.questionMock.getQuestionId();

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

  private addMockColumns(quiz: Quiz, amount: number): void {

    for(let i: number = 0; i < amount; i++) {
      const tempColumn: QuizBoardColumn = new QuizBoardColumn(this.column_id_counter++, `Column ${i}`);

      for (let j: number = 0; j < amount; j++) {

        tempColumn.addQuestion(new QuizQuestion(this.question_id_counter++, `Question Number; ${this.question_id_counter}`, j*10))
      }

      quiz.addColumn(tempColumn);
    }
  }
}
