import {QuizQuestion} from '../model/question/quiz-question';
import {MultipleChoiceQuestion} from '../model/question/multiple-choice-question';
import {ActionQuestion} from '../model/question/action-question';

export class QUESTION_MOCK {

  question_id_counter: number;
  question1_1: MultipleChoiceQuestion;
  question1_2: MultipleChoiceQuestion;
  question1_3: MultipleChoiceQuestion;
  question1_4: ActionQuestion;
  question1_5: MultipleChoiceQuestion;

  question2_1: MultipleChoiceQuestion;
  question2_2: MultipleChoiceQuestion;
  question2_3: MultipleChoiceQuestion;
  question2_4: ActionQuestion;
  question2_5: MultipleChoiceQuestion;

  question3_1: MultipleChoiceQuestion;
  question3_2: MultipleChoiceQuestion;
  question3_3: MultipleChoiceQuestion;
  question3_4: ActionQuestion;
  question3_5: MultipleChoiceQuestion;

  question4_1: MultipleChoiceQuestion;
  question4_2: ActionQuestion;
  question4_3: MultipleChoiceQuestion;
  question4_4: MultipleChoiceQuestion;
  question4_5: ActionQuestion;

  question5_1: MultipleChoiceQuestion;
  question5_2: MultipleChoiceQuestion;
  question5_3: MultipleChoiceQuestion;
  question5_4: MultipleChoiceQuestion;
  question5_5: MultipleChoiceQuestion;

  allQuestions: QuizQuestion[];

  constructor(questionId: number) {
    this.question_id_counter = questionId;

    this.question1_1 = new MultipleChoiceQuestion(this.question_id_counter++, 'Was heißt "Advent" wörtlich übersetzt?', 20, []);
    this.question1_2 = new MultipleChoiceQuestion(this.question_id_counter++, 'Seit wann gibt es einen gedruckten Adventskalender?', 40, []);
    this.question1_3 = new MultipleChoiceQuestion(this.question_id_counter++, 'Warum verteilt der Nikolaus Geschenke? Der Brauch geht ' +
      'auf eine alte Legende zurück. Danach hat der Nikolaus mit Hilfe von Geldgeschenken, die er heimlich durchs Fenster warf, drei ' +
      'Töchter einer verarmten Familie gerettet. Wovor bewahrte er sie damit?',  60, []);
    this.question1_4 = new ActionQuestion(this.question_id_counter++, 'Tabu: Einer aus der Gruppe muss ein Wort umschreiben ' +
      'ohne bestimmte Begriffe dabei zu verwenden.', 80, 120);
    this.question1_5 = new MultipleChoiceQuestion(this.question_id_counter++, 'Auf welchen Tag fällt diesmal der 4. Advent?', 100, []);

    this.question2_1 = new MultipleChoiceQuestion(this.question_id_counter++, 'Was verkünden die Engel den Hirten?', 20, []);
    this.question2_2 = new MultipleChoiceQuestion(this.question_id_counter++, 'Als König Herodes bemerkt, dass die drei Weisen ihn betrogen ' +
      'haben, ist er sauer. Was tut er?', 40, []);
    this.question2_3 = new MultipleChoiceQuestion(this.question_id_counter++, 'Wovon erzählt die Weihnachtsgeschichte nichts?', 60, []);
    this.question2_4 = new ActionQuestion(this.question_id_counter++, 'Pantomime. Einer aus der Gruppe muss einen Satz aus der ' +
      'Weihnachtsgeschichte ohne Worte darstellen: sie fanden keinen Platz in der Herberge.',  80, 120);
    this.question2_5 = new MultipleChoiceQuestion(this.question_id_counter++, 'Welche Tiere sind nach den biblischen Berichten bei der ' +
      'Geburt Jesu im Stall anwesend? Achtung! Gut überlegen - 100 Punkte!',  100, []);

    this.question3_1 = new MultipleChoiceQuestion(this.question_id_counter++, 'Woraus sind „Weihnachtspyramiden“ gemacht?', 20, []);
    this.question3_2 = new MultipleChoiceQuestion(this.question_id_counter++, 'Welcher deutsche Ort ist bekannt für seine Lebkuchen?', 40, [])
    this.question3_3 = new MultipleChoiceQuestion(this.question_id_counter++, 'In England und Amerika ist es ein beliebter Adventsbrauch ' +
      'über der Tür oder dem Kamin Mistelzweige aufzuhängen. Was darf ein Mann tun, wenn er unter einem solchen Zweig ' +
      'einer Frau begegnet? Er darf sie …', 60, []);
    this.question3_4 = new ActionQuestion(this.question_id_counter++, 'Weihnachtsmaler. Einer aus der Gruppe erhält 5 Begriffe, ' +
      'drei davon muss die Gruppe raten (Zeit 150 sec.)', 80, 150);
    this.question3_5 = new MultipleChoiceQuestion(this.question_id_counter++, 'Um alle Kinder zu beschenken, müsste der Nikolaus mit', 100, []);

    this.question4_1 = new MultipleChoiceQuestion(this.question_id_counter++, 'Welches Lied darf in keinem Weihnachtsgottesdienst fehlen?', 20, []);
    this.question4_2 = new ActionQuestion(this.question_id_counter++, 'Pantomime: Einer aus der Gruppe muss pantomimisch ein bekanntes ' +
      'Adventslied darstellen.', 40, 120);
    this.question4_3 = new MultipleChoiceQuestion(this.question_id_counter++, '"Ihr Kinderlein kommet, o kommet doch all“ – Wisst ihr, wie der ' +
      'Text weitergeht?', 60, []);
    this.question4_4 = new MultipleChoiceQuestion(this.question_id_counter++, 'Von welcher Musikgruppe stammt das Album „Wir warten ' +
      'auf ’s Christkind?“', 80, []);
    this.question4_5 = new ActionQuestion(this.question_id_counter++, 'Höchststrafe! Singen!', 100, 120);

    this.question5_1 = new MultipleChoiceQuestion(this.question_id_counter++, 'Ein Münchner Jugend-Forschungsinstitut befragte mehr als 700 ' +
      'deutsche Kinder im Alter von sechs bis zwölf Jahren nach dem Grund für das Weihnachtsfest. Wie viele kannten den Grund nicht?', 20, []);
    this.question5_2 = new MultipleChoiceQuestion(this.question_id_counter++, 'Was hat Frank sich zu Weihnachten gewünscht?', 40, []);
    this.question5_3 = new MultipleChoiceQuestion(this.question_id_counter++, 'Die „Weihnachtsinseln“ (Christmas Island) gibt es wirklich! ' +
      'Frage: wo finden wir sie?', 60, []);
    this.question5_4 = new MultipleChoiceQuestion(this.question_id_counter++, 'Wann feiern die russischen Christen Weihnachten?', 80, []);
    this.question5_5 = new MultipleChoiceQuestion(this.question_id_counter++, 'Was gibt’s bei Rahns Heiligabend zu essen?', 100, []);

    this.allQuestions = [
      this.question1_1,
      this.question1_2,
      this.question1_3,
      this.question1_4,
      this.question1_5,
      this.question2_1,
      this.question2_2,
      this.question2_3,
      this.question2_4,
      this.question2_5,
      this.question3_1,
      this.question3_2,
      this.question3_3,
      this.question3_4,
      this.question3_5,
      this.question4_1,
      this.question4_2,
      this.question4_3,
      this.question4_4,
      this.question4_5,
      this.question5_1,
      this.question5_2,
      this.question5_3,
      this.question5_4,
      this.question5_5,
    ]
  }

  getQuestionId(): number {
    return this.question_id_counter;
  }

  getMockData(): QuizQuestion[] {

    return this.allQuestions;
  }
}
