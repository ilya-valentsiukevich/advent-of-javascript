import { Component, OnInit } from '@angular/core';
import {BaseButtonComponent} from "../base-button/base-button.component";

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.css']
})
export class SettingsButtonComponent extends BaseButtonComponent {
  constructor() {
    super();
  }
}
