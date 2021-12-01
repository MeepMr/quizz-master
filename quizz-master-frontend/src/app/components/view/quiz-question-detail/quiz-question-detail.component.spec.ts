import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionDetailComponent } from './quiz-question-detail.component';
import { QuizQuestionComponent } from '../../quiz-question/quiz-question.component';
import { ShowMultipleChoiceQuestionComponent } from '../../quiz-question/show-multiple-choice-question/show-multiple-choice-question.component';
import { ShowActionQuestionComponent } from '../../quiz-question/show-action-question/show-action-question.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('QuizQuestionDetailComponent', () => {
  let component: QuizQuestionDetailComponent;
  let fixture: ComponentFixture<QuizQuestionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QuizQuestionDetailComponent,
        QuizQuestionComponent,
        ShowMultipleChoiceQuestionComponent,
        ShowActionQuestionComponent
      ],
      imports: [
        RouterTestingModule
      ]
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
