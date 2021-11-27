import {QuizQuestion} from "./quiz-question";

export class MultipleChoiceQuestion extends QuizQuestion {

  answers: String[];
  correctAnswer: String;

  constructor(id: number, questionText: String, points: number, answers: String[]) {
    super(id, questionText, points);
    this.correctAnswer = answers[0];
    this.answers = answers.sort();
  }
}
