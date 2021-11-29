import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBoardColumnComponent } from './quiz-board-column.component';
import {QuizBoardQuestionComponent} from "../quiz-board-question/quiz-board-question.component";
import {RouterTestingModule} from "@angular/router/testing";

describe('QuizBoardColumnComponent', () => {
  let component: QuizBoardColumnComponent;
  let fixture: ComponentFixture<QuizBoardColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QuizBoardColumnComponent,
        QuizBoardQuestionComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBoardColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
