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

  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  @Output() complete: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggle(started: boolean) {
    if(started) {
      this.pieTimer.start();
    }
    else {
      this.pieTimer.stop();
    }
    this.toggle.emit(started);
  }

  onComplete() {
    this.complete.emit();
  }

}
