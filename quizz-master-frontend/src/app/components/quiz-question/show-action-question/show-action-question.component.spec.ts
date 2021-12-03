import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActionQuestionComponent } from './show-action-question.component';
import { CountdownTimerComponent } from '../../../shared/components/coutdown-timer/countdown-timer.component';

describe('ShowActionQuestionComponent', () => {
  let component: ShowActionQuestionComponent;
  let fixture: ComponentFixture<ShowActionQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ShowActionQuestionComponent,
        CountdownTimerComponent
      ]
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
