import { Injectable } from '@angular/core';
import {QUESTION_MOCK} from "../../shared/mock/question-mock";
import {Observable, of} from "rxjs";
import {QuizQuestion} from "../../shared/model/quiz/quiz-question";
import {QuizService} from "../quiz-service/quiz.service";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private quizService: QuizService) { }

  questionMock: QUESTION_MOCK = this.quizService.quizMock.questionMock;

  getQuestion$(id: number): Observable<QuizQuestion> {
    return of(this.questionMock.getMockData()[id]);
  }
}
