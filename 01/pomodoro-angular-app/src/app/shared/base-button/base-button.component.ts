import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.css']
})
export class BaseButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Output() onButtonClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
