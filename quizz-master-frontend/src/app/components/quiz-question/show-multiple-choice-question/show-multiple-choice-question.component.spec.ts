import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMultipleChoiceQuestionComponent } from './show-multiple-choice-question.component';

describe('ShowMultipleChoiceQuesionComponent', () => {
  let component: ShowMultipleChoiceQuestionComponent;
  let fixture: ComponentFixture<ShowMultipleChoiceQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMultipleChoiceQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMultipleChoiceQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
