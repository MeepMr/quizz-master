import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Quiz} from "../../../shared/model/quiz/quiz";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.scss']
})
export class QuizViewComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private quizService: QuizService) { }

  activeQuiz?: Quiz;

  ngOnInit(): void {
    this.getCurrentQuiz();
  }

  getCurrentQuiz(): void {

    this.activatedRoute.params.subscribe(id => this.setCurrentQuiz(id.quiz_id)).unsubscribe();
  }

  setCurrentQuiz(quizId: number): void {

    this.quizService.getQuiz$(quizId).subscribe(quiz => this.activeQuiz = quiz).unsubscribe();
  }
}
