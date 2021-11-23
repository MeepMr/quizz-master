import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizOverviewComponent } from './quizz-overview.component';

describe('QuizzOverviewComponent', () => {
  let component: QuizOverviewComponent;
  let fixture: ComponentFixture<QuizOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizOverviewComponent ]
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