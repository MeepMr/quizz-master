import {QuizQuestion} from "./quiz-question";

export class ActionQuestion extends QuizQuestion {

  time: number;

  constructor(id: number, questionText: String, points: number, time: number) {
    super(id, questionText, points);
    this.time = time;
  }
}
