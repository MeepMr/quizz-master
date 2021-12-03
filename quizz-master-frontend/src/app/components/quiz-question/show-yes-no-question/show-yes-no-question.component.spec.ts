import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowYesNoQuestionComponent } from './show-yes-no-question.component';

describe('ShowYesNoQuestionComponent', () => {
  let component: ShowYesNoQuestionComponent;
  let fixture: ComponentFixture<ShowYesNoQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowYesNoQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowYesNoQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
