import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionComponent } from './quiz-question.component';
import { ShowMultipleChoiceQuestionComponent } from './show-multiple-choice-question/show-multiple-choice-question.component';
import { ShowActionQuestionComponent } from './show-action-question/show-action-question.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowYesNoQuestionComponent } from './show-yes-no-question/show-yes-no-question.component';
import { CountdownTimerComponent } from '../../shared/components/coutdown-timer/countdown-timer.component';

describe('QuizQuestionComponent', () => {
  let component: QuizQuestionComponent;
  let fixture: ComponentFixture<QuizQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
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
    fixture = TestBed.createComponent(QuizQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
