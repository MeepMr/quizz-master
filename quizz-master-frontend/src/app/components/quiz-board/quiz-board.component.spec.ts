import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBoardComponent } from './quiz-board.component';
import { QuizBoardColumnComponent } from './quiz-board-column/quiz-board-column.component';
import { QuizBoardQuestionComponent } from './quiz-board-question/quiz-board-question.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('QuizViewComponent', () => {
  let component: QuizBoardComponent;
  let fixture: ComponentFixture<QuizBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QuizBoardComponent,
        QuizBoardColumnComponent,
        QuizBoardQuestionComponent,
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
