import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBoardQuestionComponent } from './quiz-board-question.component';

describe('QuizBoardQuestionComponent', () => {
  let component: QuizBoardQuestionComponent;
  let fixture: ComponentFixture<QuizBoardQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizBoardQuestionComponent ]
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
