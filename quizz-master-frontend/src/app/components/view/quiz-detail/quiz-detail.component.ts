import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";
import {Observable, of} from "rxjs";
import {Quiz} from "../../../shared/model/quiz/quiz";

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.scss']
})
export class QuizDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private quizService: QuizService) { }

  activeQuiz: Observable<Quiz> = of (new Quiz(-1));

  ngOnInit(): void {
    this.getCurrentQuiz();
  }

  getCurrentQuiz(): void {

    this.activatedRoute.params.subscribe(id => this.setCurrentQuiz(id.quiz_id)).unsubscribe();
  }

  setCurrentQuiz(quizId: number): void {

    this.activeQuiz = this.quizService.getQuiz$(quizId);
  }

}
