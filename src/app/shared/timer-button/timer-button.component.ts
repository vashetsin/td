import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';

import { PieTimerComponent } from '../pie-timer/pie-timer.component';

@Component({
  selector: 'app-timer-button',
  templateUrl: './timer-button.component.html',
  styleUrls: ['./timer-button.component.scss']
})
export class TimerButtonComponent implements OnInit {

  @ViewChild('pieTimer') pieTimer: PieTimerComponent;

  @Input() radius: number;
  @Input() seconds: number;
  @Input() started: boolean;

  @Output() start: EventEmitter<void> = new EventEmitter();
  @Output() stop: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggle(started: boolean) {
    if(started) {
      this.pieTimer.start();
      this.start.emit();
    }
    else {
      var ms = this.pieTimer.stop();
      this.stop.emit(ms);
    }
  }

  onComplete(ms: number) {
    this.stop.emit(ms);
  }

}
