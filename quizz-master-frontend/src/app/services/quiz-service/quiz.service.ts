import { Injectable } from '@angular/core';
import {Quiz} from '../../shared/model/quiz/quiz';
import {Observable, of} from 'rxjs';
import {QUIZ_MOCK} from '../../shared/mock/quiz-mock';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizMock = new QUIZ_MOCK();

  getQuiz$(id: number): Observable<Quiz> {

    return of(this.quizMock.getMockData()[id]);
  }

  getQuizList$(): Observable<Quiz[]> {

    return of(this.quizMock.getMockData())
  }
}
