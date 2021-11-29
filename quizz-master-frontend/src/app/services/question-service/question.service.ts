import { Injectable } from '@angular/core';
import {QUESTION_MOCK} from '../../shared/mock/question-mock';
import {Observable, of} from 'rxjs';
import {QuizQuestion} from '../../shared/model/question/quiz-question';
import {QuizService} from '../quiz-service/quiz.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionMock: QUESTION_MOCK = this.quizService.quizMock.questionMock;

  constructor(private quizService: QuizService) { }

  getQuestion$(id: number): Observable<QuizQuestion> {
    return of(this.questionMock.getMockData()[id]);
  }
}
