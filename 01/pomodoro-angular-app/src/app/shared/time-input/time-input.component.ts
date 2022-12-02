import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.css']
})
export class TimeInputComponent implements OnInit {
  @Input() formGroup!:FormGroup;
  @Input() name!:string;
  @Input() value!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
