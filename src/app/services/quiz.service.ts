import { Injectable } from '@angular/core';
import {Quiz} from "../shared/model/quiz/quiz";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  public getQuiz$(id: number): Observable<Quiz> {

    return of(new Quiz(id, 1))
  }

  public getQuizList$(): Observable<Quiz[]> {

    return of([new Quiz(0, 1), new Quiz(1, 2)])
  }
}
