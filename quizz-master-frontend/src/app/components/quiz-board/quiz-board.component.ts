import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Quiz} from '../../shared/model/quiz/quiz';
import {QuizService} from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-board',
  templateUrl: './quiz-board.component.html',
  styleUrls: ['./quiz-board.component.scss']
})
export class QuizBoardComponent implements OnInit {

  activeQuiz: Quiz = new Quiz(-1);

  constructor(private activatedRoute: ActivatedRoute, private quizService: QuizService) { }

  ngOnInit(): void {
    this.getCurrentQuiz();
  }

  getCurrentQuiz(): void {

    this.activatedRoute.params.subscribe(id => this.setCurrentQuiz(id.quiz_id)).unsubscribe();
  }

  setCurrentQuiz(quizId: number): void {

    this.quizService.getQuiz$(quizId).subscribe(quiz => this.activeQuiz = quiz)
.unsubscribe();
  }
}
