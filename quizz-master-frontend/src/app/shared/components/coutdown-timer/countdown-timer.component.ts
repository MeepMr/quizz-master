import {Component, EventEmitter, Input, OnInit, OnDestroy, Output} from '@angular/core';
import {Observable, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy{

  @Input() initialTime$: Observable<number> = new Observable();
  @Output() onTimeFunction: EventEmitter<void> = new EventEmitter<void>();

  timeSubscription?: Subscription;
  componentSubscriptions$: Subscription[] = [];

  everySecond$: Observable<number> = timer(0, 1000);

  remainingSeconds: number = 0;
  timeString: String = '00:00';

  ngOnInit(): void {

    this.timeSubscription = this.initialTime$.subscribe(time => this.startTimer(time));
    this.componentSubscriptions$.push(this.timeSubscription);
  }

  startTimer(time: number): void {

    if (time > 0) {

      this.remainingSeconds = time;
      this.setTimeString();

      let everySecondSubscription: Subscription = this.everySecond$.subscribe(() => this.timerInterval())
      this.componentSubscriptions$.push(everySecondSubscription);
    }
  }

  timerInterval(): void {

    if(this.remainingSeconds > 0) {
      this.remainingSeconds--;
      this.setTimeString()
    } else {
      this.onTimeFunction.emit();
    }
  }

  ngOnDestroy() {

    this.timeSubscription?.unsubscribe();
  }

  private setTimeString(): void {

    let seconds = this.remainingSeconds % 60
    let minutes = (this.remainingSeconds - seconds) / 60

    this.timeString = CountdownTimerComponent.getTimeString(minutes, seconds);
  }

  private static getTimeString(minutes: number, seconds: number): String {

    let secondString: String = CountdownTimerComponent.getNumberString(seconds);
    let minuteString: String = CountdownTimerComponent.getNumberString(minutes);

    return minuteString + ':' + secondString;
  }

  private static getNumberString(number: number): String {

    return String(number).padStart(2,'0');
  }
}
