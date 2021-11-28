import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActionQuestionComponent } from './show-action-question.component';

describe('ShowActionQuestionComponent', () => {
  let component: ShowActionQuestionComponent;
  let fixture: ComponentFixture<ShowActionQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowActionQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowActionQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
