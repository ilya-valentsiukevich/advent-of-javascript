import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ring',
  templateUrl: './ring.component.html',
  styleUrls: ['./ring.component.css']
})
export class RingComponent implements OnInit {
  @Input() isTimerCompleted:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
