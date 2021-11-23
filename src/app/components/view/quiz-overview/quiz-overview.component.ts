import { Component, OnInit } from '@angular/core';
import {Quiz} from "../../../shared/model/quiz/quiz";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-quiz-overview',
  templateUrl: './quiz-overview.component.html',
  styleUrls: ['./quiz-overview.component.scss']
})
export class QuizOverviewComponent implements OnInit {

  constructor(private quizService: QuizService) { }

  quizList: Quiz[] = [];

  ngOnInit(): void {
    this.getQuizList();
  }

  private getQuizList(): void {
    this.quizService.getQuizList$().subscribe(quizList => this.quizList = quizList);
  }
}
