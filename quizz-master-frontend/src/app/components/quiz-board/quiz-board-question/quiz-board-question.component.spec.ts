import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBoardQuestionComponent } from './quiz-board-question.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('QuizBoardQuestionComponent', () => {
  let component: QuizBoardQuestionComponent;
  let fixture: ComponentFixture<QuizBoardQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QuizBoardQuestionComponent,
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBoardQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
