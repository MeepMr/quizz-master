import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question-service/question.service';
import { QuizQuestion } from '../../../shared/model/question/quiz-question';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-quiz-question-detail',
  templateUrl: './quiz-question-detail.component.html',
  styleUrls: ['./quiz-question-detail.component.scss']
})
export class QuizQuestionDetailComponent implements OnInit {

  activeQuestion: Observable<QuizQuestion> = of(new QuizQuestion(-1, '', -1));

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getCurrentQuestion();
  }

  getCurrentQuestion(): void {
    this.activatedRoute.params.subscribe(id => this.setCurrentQuestion(id.question_id)).unsubscribe();
  }

  setCurrentQuestion(questionId: number): void {
    this.activeQuestion = this.questionService.getQuestion$(questionId);
  }

}
