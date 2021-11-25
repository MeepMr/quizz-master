import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizBoardColumnComponent } from './quiz-board-column.component';

describe('QuizBoardColumnComponent', () => {
  let component: QuizBoardColumnComponent;
  let fixture: ComponentFixture<QuizBoardColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizBoardColumnComponent ]
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
