import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PomodoroComponent } from './pomodoro/pomodoro.component';
import { RingComponent } from './ring/ring.component';
import { TimerComponent } from './timer/timer.component';
import { TimeInputComponent } from './shared/time-input/time-input.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BaseButtonComponent } from './shared/base-button/base-button.component';
import { SettingsButtonComponent } from './shared/settings-button/settings-button.component';
import { CompleteButtonComponent } from './shared/complete-button/complete-button.component';
import {NgxMaskModule} from "ngx-mask";

@NgModule({
  declarations: [
    AppComponent,
    PomodoroComponent,
    RingComponent,
    TimerComponent,
    TimeInputComponent,
    BaseButtonComponent,
    SettingsButtonComponent,
    CompleteButtonComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        NgxMaskModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
