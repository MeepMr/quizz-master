import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizQuestionComponent } from './quiz-question.component';
import { ShowMultipleChoiceQuestionComponent } from './show-multiple-choice-question/show-multiple-choice-question.component';
import { ShowActionQuestionComponent } from './show-action-question/show-action-question.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('QuizQuestionComponent', () => {
  let component: QuizQuestionComponent;
  let fixture: ComponentFixture<QuizQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QuizQuestionComponent,
        ShowMultipleChoiceQuestionComponent,
        ShowActionQuestionComponent,
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
