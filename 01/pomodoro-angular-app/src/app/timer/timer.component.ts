import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {interval, Subscription} from "rxjs";
import {MILLISECONDS_IN_SECOND, SECONDS_IN_MINUTE} from "./timer";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  get timerFormGroup(): FormGroup {
    return this._timerFormGroup;
  }
  get isEditModeEnabled(): boolean {
    return this._isEditModeEnabled;
  }
  get isTimerRunning(): boolean {
    return this._isTimerRunning;
  }

  private _isTimerRunning: boolean = false;
  private _isEditModeEnabled: boolean = false;
  private _timerFormGroup!:FormGroup;
  private _subscription: Subscription = new Subscription();

  @Input() initialTimeInSeconds:number = 0;
  private _time: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this._time = this.initialTimeInSeconds;
    this._timerFormGroup = new FormGroup({
      minutes: new FormControl({value: this.getMinutes(), disabled: true}),
      seconds: new FormControl({value: this.getSeconds(), disabled: true})
    });
  }

  toggleTimer() {
    this._isTimerRunning = !this._isTimerRunning;

    if (this._isTimerRunning) {
      this.startTimer()
    } else {
      this.stopTimer();
    }
  }

  toggleMode() {
    this._isEditModeEnabled = !this._isEditModeEnabled;

    if (this._isEditModeEnabled) {
      this.enableEditMode();
    } else {
      this.saveChanges();
    }
  }

  private enableEditMode() {
    this.getMinutesFormControl().enable({emitEvent: false});
    this.getSecondsFormControl().enable({emitEvent: false});
  }

  private saveChanges() {
    this.getMinutesFormControl().disable({emitEvent: false});
    this.getSecondsFormControl().disable({emitEvent: false});

    const minutes: number = Math.min(Number(this.getMinutesFormControl().value), SECONDS_IN_MINUTE - 1);
    const seconds: number = Math.min(Number(this.getSecondsFormControl().value), SECONDS_IN_MINUTE - 1);

    this._time = (minutes * SECONDS_IN_MINUTE + seconds);
  }

  private startTimer() {
    this._subscription = interval(MILLISECONDS_IN_SECOND).subscribe(() => {
      this._time -= 1;
      this.getMinutesFormControl().setValue(this.getMinutes());
      this.getSecondsFormControl().setValue(this.getSeconds());

      if (this._time === 0) {
        this.stopTimer();
      }
    });
  }

  private stopTimer() {
    this._subscription.unsubscribe();
  }

  private getMinutesFormControl() {
    return this._timerFormGroup.controls["minutes"];
  }

  private getSecondsFormControl() {
    return this._timerFormGroup.controls["seconds"];
  }

  private getMinutes() {
    const minutes = Math.floor(this._time / SECONDS_IN_MINUTE);
    return this.formatTime(minutes)
  }

  private getSeconds() {
    const seconds = this._time % SECONDS_IN_MINUTE;
    return this.formatTime(seconds);
  }

  private formatTime(value: number) {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
