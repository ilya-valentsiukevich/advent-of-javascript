import { Component, OnInit } from '@angular/core';
import {BaseButtonComponent} from "../base-button/base-button.component";

@Component({
  selector: 'app-complete-button',
  templateUrl: './complete-button.component.html',
  styleUrls: ['./complete-button.component.css']
})
export class CompleteButtonComponent extends BaseButtonComponent{

  constructor() {
    super();
  }
}
