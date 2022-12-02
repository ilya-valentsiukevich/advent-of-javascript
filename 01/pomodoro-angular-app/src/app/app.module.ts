import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { RingComponent } from './ring/ring.component';
import { TimerComponent } from './timer/timer.component';
import { TimeInputComponent } from './shared/time-input/time-input.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DigitsOnlyDirective } from './digits-only.directive';
import { BaseButtonComponent } from './shared/base-button/base-button.component';
import { SettingsButtonComponent } from './shared/settings-button/settings-button.component';
import { CompleteButtonComponent } from './shared/complete-button/complete-button.component';

@NgModule({
  declarations: [
    AppComponent,
    PomodoroComponent,
    RingComponent,
    TimerComponent,
    TimeInputComponent,
    DigitsOnlyDirective,
    BaseButtonComponent,
    SettingsButtonComponent,
    CompleteButtonComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
