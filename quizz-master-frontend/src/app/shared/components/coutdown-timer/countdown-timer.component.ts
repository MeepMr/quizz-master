import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy{

  @Input() initialTime$: Observable<number> = new Observable();
  @Output() timerReadyFunction: EventEmitter<void> = new EventEmitter<void>();

  timeSubscription?: Subscription;
  componentSubscriptions$: Subscription[] = [];

  everySecond$: Observable<number> = timer(0, 1000);

  remainingSeconds: number = 0;
  timeString: String = '00:00';

  private static getTimeString(minutes: number, seconds: number): String {

    const secondString: String = CountdownTimerComponent.getNumberString(seconds);
    const minuteString: String = CountdownTimerComponent.getNumberString(minutes);

    return `${minuteString  }:${  secondString}`;
  }

  private static getNumberString(number: number): String {

    return String(number).padStart(2,'0');
  }

  ngOnInit(): void {

    this.timeSubscription = this.initialTime$.subscribe(time => this.startTimer(time));
    this.componentSubscriptions$.push(this.timeSubscription);
  }

  ngOnDestroy() {

    this.timeSubscription?.unsubscribe();
  }

  startTimer(time: number): void {

    if (time > 0) {

      this.remainingSeconds = time;
      this.setTimeString();

      const everySecondSubscription: Subscription = this.everySecond$.subscribe(() => this.timerInterval())
      this.componentSubscriptions$.push(everySecondSubscription);
    }
  }

  timerInterval(): void {

    if(this.remainingSeconds > 0) {
      this.remainingSeconds--;
      this.setTimeString()
    } else {
      this.timerReadyFunction.emit();
    }
  }

  private setTimeString(): void {

    const seconds: number = this.remainingSeconds % 60
    const minutes: number = (this.remainingSeconds - seconds) / 60

    this.timeString = CountdownTimerComponent.getTimeString(minutes, seconds);
  }

}
