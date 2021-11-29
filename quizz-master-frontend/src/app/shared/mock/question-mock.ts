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
  question2_5: QuizQuestion;

  question3_1: MultipleChoiceQuestion;
  question3_2: MultipleChoiceQuestion;
  question3_3: MultipleChoiceQuestion;
  question3_4: ActionQuestion;
  question3_5: MultipleChoiceQuestion;

  question4_1: MultipleChoiceQuestion;
  question4_2: ActionQuestion;
  question4_3: QuizQuestion;
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

    this.question1_1 = new MultipleChoiceQuestion(this.question_id_counter++, 'Was heißt "Advent" wörtlich übersetzt?', 20, ["Ankunft", "Auskunft", "Herkunft", "Zukunft"]);
    this.question1_2 = new MultipleChoiceQuestion(this.question_id_counter++, 'Seit wann gibt es einen gedruckten Adventskalender?', 40, ["1902", "1882", "1528", "1964"]);
    this.question1_3 = new MultipleChoiceQuestion(this.question_id_counter++, 'Warum verteilt der Nikolaus Geschenke? Der Brauch geht auf eine alte Legende zurück. Danach hat der Nikolaus mit Hilfe von Geldgeschenken, die er heimlich durchs Fenster warf, drei Töchter einer verarmten Familie gerettet. Wovor bewahrte er sie damit?',  60, ["Prostitution", "Baumwollplantage", "Kloster", "Heirat"]);
    this.question1_4 = new ActionQuestion(this.question_id_counter++, 'Tabu: Einer aus der Gruppe muss ein Wort umschreiben ohne bestimmte Begriffe dabei zu verwenden.', 80, 120);
    this.question1_5 = new MultipleChoiceQuestion(this.question_id_counter++, 'Auf welchen Tag fällt diesmal der 4. Advent?', 100, ["23. Dezember", "Heiligabend", "Montag", "dritter Sonntag im Dezember"]);

    this.question2_1 = new MultipleChoiceQuestion(this.question_id_counter++, 'Was verkünden die Engel den Hirten?', 20, ["Frieden auf Erden", "Freiheit für Palästina", "Krieg den Römern", "Freibier für alle"]);
    this.question2_2 = new MultipleChoiceQuestion(this.question_id_counter++, 'Als König Herodes bemerkt, dass die drei Weisen ihn betrogen haben, ist er sauer. Was tut er?', 40, ["Er befiehlt alle jüdischen Jungen unter zwei Jahren umzubringen", "Er schickt einen Suchtrupp los", "Er lässt alle Theater und Kneipen in Jerusalem schließen", "Er begibt sich in seinen Harem, um auf andere Gedanken zu kommen"]);
    this.question2_3 = new MultipleChoiceQuestion(this.question_id_counter++, 'Wovon erzählt die Weihnachtsgeschichte nichts?', 60, ["Tannenbaum", "Steuerlisten", "Engel", "Windeln"]);
    this.question2_4 = new ActionQuestion(this.question_id_counter++, 'Pantomime. Einer aus der Gruppe muss einen Satz aus der Weihnachtsgeschichte ohne Worte darstellen: sie fanden keinen Platz in der Herberge.',  80, 120);
    this.question2_5 = new QuizQuestion(this.question_id_counter++, 'Welche Tiere sind nach den biblischen Berichten bei der Geburt Jesu im Stall anwesend? Achtung! Gut überlegen - 100 Punkte!',  100);

    this.question3_1 = new MultipleChoiceQuestion(this.question_id_counter++, 'Woraus sind „Weihnachtspyramiden“ gemacht?', 20, ["Holz", "Stein", "Lebkuchen", "Kerzenwachs"]);
    this.question3_2 = new MultipleChoiceQuestion(this.question_id_counter++, 'Welcher deutsche Ort ist bekannt für seine Lebkuchen?', 40, ["Nürnberg", "Berlin", "Hamburg", "Schwelm"])
    this.question3_3 = new MultipleChoiceQuestion(this.question_id_counter++, 'In England und Amerika ist es ein beliebter Adventsbrauch über der Tür oder dem Kamin Mistelzweige aufzuhängen. Was darf ein Mann tun, wenn er unter einem solchen Zweig einer Frau begegnet? Er darf sie …', 60, ["küssen", "auf den Arm nehmen", "auf den Po schlagen", "ins Ohrläppchen kneifen"]);
    this.question3_4 = new ActionQuestion(this.question_id_counter++, 'Weihnachtsmaler. Einer aus der Gruppe erhält 5 Begriffe, drei davon muss die Gruppe raten (Zeit 150 sec.)', 80, 150);
    this.question3_5 = new MultipleChoiceQuestion(this.question_id_counter++, 'Mit welcher geschwindigkeit müsste der Nikolaus fliegen, um alle Kinder zu beschenken?', 100, ["3.000-facher Schallgeschwindigkeit", "1.000-facher Schallgeschwindigkeit", "6.000-facher Schallgeschwindigkeit", "10.000-facher Schallgeschwindigkeit"]);

    this.question4_1 = new MultipleChoiceQuestion(this.question_id_counter++, 'Welches Lied darf in keinem Weihnachtsgottesdienst fehlen?', 20, ["O du fröhliche", "Last Christmas", "Jingle Belts", "Kling Glöckchen"]);
    this.question4_2 = new ActionQuestion(this.question_id_counter++, 'Pantomime: Einer aus der Gruppe muss pantomimisch ein bekanntes Adventslied darstellen.', 40, 120);
    this.question4_3 = new QuizQuestion(this.question_id_counter++, '"Ihr Kinderlein kommet, o kommet doch all“ – Wisst ihr, wie der Text weitergeht?', 60);
    this.question4_4 = new MultipleChoiceQuestion(this.question_id_counter++, 'Von welcher Musikgruppe stammt das Album „Wir warten auf ’s Christkind?“', 80, ["Die Toten Hosen", "Bro'sis", "Die Ärzte", "Die Prinen"]);
    this.question4_5 = new ActionQuestion(this.question_id_counter++, 'Höchststrafe! Singen!', 100, 120);

    this.question5_1 = new MultipleChoiceQuestion(this.question_id_counter++, 'Ein Münchner Jugend-Forschungsinstitut befragte mehr als 700 deutsche Kinder im Alter von sechs bis zwölf Jahren nach dem Grund für das Weihnachtsfest. Wie viele kannten den Grund nicht?', 20, ["39 Prozent", "9 Prozent", "19 Prozent", "29 Prozent"]);
    this.question5_2 = new MultipleChoiceQuestion(this.question_id_counter++, 'Was hat Frank sich zu Weihnachten gewünscht?', 40, ["CD", "Krawatte", "10er Karte Fitnessstudio", "Mussleshirt"]);
    this.question5_3 = new MultipleChoiceQuestion(this.question_id_counter++, 'Die „Weihnachtsinseln“ (Christmas Island) gibt es wirklich! Frage: wo finden wir sie?', 60, ["Indischer Ozean", "Ärmelkanal", "Mittelmeer", "Rotes Meer"]);
    this.question5_4 = new MultipleChoiceQuestion(this.question_id_counter++, 'Wann feiern die russischen Christen Weihnachten?', 80, ["6. Januar", "6. Dezember", "25. Dezember", "31. Dezember"]);
    this.question5_5 = new MultipleChoiceQuestion(this.question_id_counter++, 'Was gibt’s bei Rahns Heiligabend zu essen?', 100, ["Raclette", "Gänsebraten", "Tofu auf Vollkornnudeln", "gefüllte Ente"]);

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
