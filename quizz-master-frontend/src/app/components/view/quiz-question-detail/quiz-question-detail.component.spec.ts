import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionDetailComponent } from './quiz-question-detail.component';
import { QuizQuestionComponent } from '../../quiz-question/quiz-question.component';
import { ShowMultipleChoiceQuestionComponent } from '../../quiz-question/show-multiple-choice-question/show-multiple-choice-question.component';
import { ShowActionQuestionComponent } from '../../quiz-question/show-action-question/show-action-question.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowYesNoQuestionComponent } from '../../quiz-question/show-yes-no-question/show-yes-no-question.component';
import { CountdownTimerComponent } from '../../../shared/components/coutdown-timer/countdown-timer.component';

describe('QuizQuestionDetailComponent', () => {
  let component: QuizQuestionDetailComponent;
  let fixture: ComponentFixture<QuizQuestionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QuizQuestionDetailComponent,
        QuizQuestionComponent,
        ShowMultipleChoiceQuestionComponent,
        ShowActionQuestionComponent,
        ShowYesNoQuestionComponent,
        CountdownTimerComponent
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
