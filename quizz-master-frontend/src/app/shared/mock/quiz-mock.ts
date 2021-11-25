import {Quiz} from '../model/quiz/quiz';
import {QuizBoardColumn} from '../model/quiz/quiz-board-column';
import {QuestionType, QuizQuestion} from '../model/quiz/quiz-question';

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

    const column_1_1: QuizBoardColumn = new QuizBoardColumn(this.column_id_counter++, 'Advent');
    column_1_1.addQuestion(new QuizQuestion(this.question_id_counter++, 'Was heißt "Advent" wörtlich übersetzt?',
      QuestionType.MULTIPLE_CHOICE, 20));
    column_1_1.addQuestion(new QuizQuestion(this.question_id_counter++, 'Seit wann gibt es einen gedruckten Adventskalender?',
      QuestionType.MULTIPLE_CHOICE, 40));
    column_1_1.addQuestion(new QuizQuestion(this.question_id_counter++, 'Warum verteilt der Nikolaus Geschenke? Der Brauch geht ' +
      'auf eine alte Legende zurück. Danach hat der Nikolaus mit Hilfe von Geldgeschenken, die er heimlich durchs Fenster warf, drei ' +
      'Töchter einer verarmten Familie gerettet. Wovor bewahrte er sie damit?', QuestionType.MULTIPLE_CHOICE, 60));
    column_1_1.addQuestion(new QuizQuestion(this.question_id_counter++, 'Tabu: Einer aus der Gruppe muss ein Wort umschreiben ' +
      'ohne bestimmte Begriffe dabei zu verwenden.', QuestionType.ACTION, 80));
    column_1_1.addQuestion(new QuizQuestion(this.question_id_counter++, 'Auf welchen Tag fällt diesmal der 4. Advent?',
      QuestionType.MULTIPLE_CHOICE, 100));
    this.quiz1.addColumn(column_1_1);

    const column_1_2: QuizBoardColumn = new QuizBoardColumn(this.column_id_counter++, 'Weihnachtsgeschichte');
    column_1_2.addQuestion(new QuizQuestion(this.question_id_counter++, 'Was verkünden die Engel den Hirten?',
      QuestionType.MULTIPLE_CHOICE, 20));
    column_1_2.addQuestion(new QuizQuestion(this.question_id_counter++, 'Als König Herodes bemerkt, dass die drei Weisen ihn betrogen ' +
      'haben, ist er sauer. Was tut er?', QuestionType.MULTIPLE_CHOICE, 40));
    column_1_2.addQuestion(new QuizQuestion(this.question_id_counter++, 'Wovon erzählt die Weihnachtsgeschichte nichts?',
      QuestionType.MULTIPLE_CHOICE, 60));
    column_1_2.addQuestion(new QuizQuestion(this.question_id_counter++, 'Pantomime. Einer aus der Gruppe muss einen Satz aus der ' +
      'Weihnachtsgeschichte ohne Worte darstellen: sie fanden keinen Platz in der Herberge.', QuestionType.ACTION, 80));
    column_1_2.addQuestion(new QuizQuestion(this.question_id_counter++, 'Welche Tiere sind nach den biblischen Berichten bei der ' +
      'Geburt Jesu im Stall anwesend? Achtung! Gut überlegen - 100 Punkte!', QuestionType.MULTIPLE_CHOICE, 100));
    this.quiz1.addColumn(column_1_2);

    const column_1_3: QuizBoardColumn = new QuizBoardColumn(this.column_id_counter++, 'Brauchtum');
    column_1_3.addQuestion(new QuizQuestion(this.question_id_counter++, 'Woraus sind „Weihnachtspyramiden“ gemacht?',
      QuestionType.MULTIPLE_CHOICE, 20));
    column_1_3.addQuestion(new QuizQuestion(this.question_id_counter++, 'Welcher deutsche Ort ist bekannt für seine Lebkuchen?',
      QuestionType.MULTIPLE_CHOICE, 40));
    column_1_3.addQuestion(new QuizQuestion(this.question_id_counter++, 'In England und Amerika ist es ein beliebter Adventsbrauch ' +
      'über der Tür oder dem Kamin Mistelzweige aufzuhängen. Was darf ein Mann tun, wenn er unter einem solchen Zweig ' +
      'einer Frau begegnet? Er darf sie …', QuestionType.MULTIPLE_CHOICE, 60));
    column_1_3.addQuestion(new QuizQuestion(this.question_id_counter++, 'Weihnachtsmaler. Einer aus der Gruppe erhält 5 Begriffe, ' +
      'drei davon muss die Gruppe raten (Zeit 150 sec.)', QuestionType.ACTION, 80));
    column_1_3.addQuestion(new QuizQuestion(this.question_id_counter++, 'Um alle Kinder zu beschenken, müsste der Nikolaus mit',
      QuestionType.MULTIPLE_CHOICE, 100));
    this.quiz1.addColumn(column_1_3);

    const column_1_4: QuizBoardColumn = new QuizBoardColumn(this.column_id_counter++, 'Musik');
    column_1_4.addQuestion(new QuizQuestion(this.question_id_counter++, 'Welches Lied darf in keinem Weihnachtsgottesdienst fehlen?',
      QuestionType.MULTIPLE_CHOICE, 20));
    column_1_4.addQuestion(new QuizQuestion(this.question_id_counter++, 'Pantomime: Einer aus der Gruppe muss pantomimisch ein bekanntes ' +
      'Adventslied darstellen.', QuestionType.ACTION, 40));
    column_1_4.addQuestion(new QuizQuestion(this.question_id_counter++, '"Ihr Kinderlein kommet, o kommet doch all“ – Wisst ihr, wie der ' +
      'Text weitergeht?', QuestionType.MULTIPLE_CHOICE, 60));
    column_1_4.addQuestion(new QuizQuestion(this.question_id_counter++, 'Von welcher Musikgruppe stammt das Album „Wir warten ' +
      'auf ’s Christkind?“', QuestionType.MULTIPLE_CHOICE, 80));
    column_1_4.addQuestion(new QuizQuestion(this.question_id_counter++, 'Höchststrafe! Singen!', QuestionType.ACTION, 100));
    this.quiz1.addColumn(column_1_4);

    const column_1_5: QuizBoardColumn = new QuizBoardColumn(this.column_id_counter++, 'A-Z');
    column_1_5.addQuestion(new QuizQuestion(this.question_id_counter++, 'Ein Münchner Jugend-Forschungsinstitut befragte mehr als 700 ' +
      'deutsche Kinder im Alter von sechs bis zwölf Jahren nach dem Grund für das Weihnachtsfest. Wie viele kannten den Grund nicht?',
      QuestionType.MULTIPLE_CHOICE, 20));
    column_1_5.addQuestion(new QuizQuestion(this.question_id_counter++, 'Was hat Frank sich zu Weihnachten gewünscht?',
      QuestionType.ACTION, 40));
    column_1_5.addQuestion(new QuizQuestion(this.question_id_counter++, 'Die „Weihnachtsinseln“ (Christmas Island) gibt es wirklich! ' +
      'Frage: wo finden wir sie?', QuestionType.MULTIPLE_CHOICE, 60));
    column_1_5.addQuestion(new QuizQuestion(this.question_id_counter++, 'Wann feiern die russischen Christen Weihnachten?',
      QuestionType.MULTIPLE_CHOICE, 80));
    column_1_5.addQuestion(new QuizQuestion(this.question_id_counter++, 'Was gibt’s bei Rahns Heiligabend zu essen?',
      QuestionType.ACTION, 100));
    this.quiz1.addColumn(column_1_5);

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

        tempColumn.addQuestion(new QuizQuestion(this.question_id_counter++, `Question Number; ${this.question_id_counter}`,
          QuestionType.MULTIPLE_CHOICE, j*10))
      }

      quiz.addColumn(tempColumn);
    }
  }
}
