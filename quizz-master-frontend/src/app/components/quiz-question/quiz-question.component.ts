import {Component, Input, OnInit} from '@angular/core';
import {QuizQuestion} from "../../shared/model/quiz/quiz-question";

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  @Input() activeQuestion?: QuizQuestion | null;

  ngOnInit(): void {
    const uselessBoolean: boolean = true;
  }
}
