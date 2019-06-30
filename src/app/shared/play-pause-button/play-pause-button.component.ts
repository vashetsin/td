import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-play-pause-button',
  templateUrl: './play-pause-button.component.html',
  styleUrls: ['./play-pause-button.component.scss']
})
export class PlayPauseButtonComponent implements OnInit {

  @Input() started: boolean;

  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  private id: any = uuid.v4();

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.toggle.emit(!this.started);
  }

}
