import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDetailComponent } from './quiz-detail.component';
import {QuizBoardComponent} from '../../quiz-board/quiz-board.component';
import {QuizBoardColumnComponent} from '../../quiz-board/quiz-board-column/quiz-board-column.component';
import {QuizBoardQuestionComponent} from '../../quiz-board/quiz-board-question/quiz-board-question.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('QuizDetailComponent', () => {
  let component: QuizDetailComponent;
  let fixture: ComponentFixture<QuizDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QuizDetailComponent,
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
    fixture = TestBed.createComponent(QuizDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
