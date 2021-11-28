import { Injectable } from '@angular/core';
import {QUESTION_MOCK} from "../../shared/mock/question-mock";
import {Observable, of} from "rxjs";
import {QuizQuestion} from "../../shared/model/quiz/quiz-question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionMock: QUESTION_MOCK = new QUESTION_MOCK(0);

  getQuestion$(id: number): Observable<QuizQuestion> {
    return of(this.questionMock.getMockData()[id]);
  }
}
