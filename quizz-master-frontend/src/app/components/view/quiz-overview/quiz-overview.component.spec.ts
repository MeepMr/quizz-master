import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizOverviewComponent } from './quiz-overview.component';
import {QuizCardComponent} from '../../quiz-card/quiz-card.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('QuizzOverviewComponent', () => {
  let component: QuizOverviewComponent;
  let fixture: ComponentFixture<QuizOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QuizOverviewComponent,
        QuizCardComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
