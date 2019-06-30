import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { Todo } from '../todo';
import { PieTimerComponent } from '../shared/pie-timer/pie-timer.component';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
  
  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();
  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  started: boolean;

  constructor() {
  }

  onToggle(started: boolean) {
    this.started = started;
    if(!started) {
      this.toggleComplete.emit(this.todo);
    }
  }

  onComplete() {
   this.onToggle(false);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
