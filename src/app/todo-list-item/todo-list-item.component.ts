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

  onStart(started: boolean) {
    this.started = true;
  }

  onStop(ms: number) {
    this.started = false;
    this.todo.title += ' (' + Math.round(ms) + ' ms)';
    this.toggleComplete.emit(this.todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
