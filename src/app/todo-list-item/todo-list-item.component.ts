import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { Todo } from '../todo';
import { PieTimerComponent } from '../shared/pie-timer/pie-timer.component';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  @ViewChild('pieTimer') pieTimer: PieTimerComponent;
  
  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  toggleTodoComplete(todo: Todo) {
    this.pieTimer.start();
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}
