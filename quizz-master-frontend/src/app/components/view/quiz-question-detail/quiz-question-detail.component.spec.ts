import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionDetailComponent } from './quiz-question-detail.component';

describe('QuizQuestionDetailComponent', () => {
  let component: QuizQuestionDetailComponent;
  let fixture: ComponentFixture<QuizQuestionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizQuestionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizQuestionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
