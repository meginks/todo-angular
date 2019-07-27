import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // inputs and outputs 
  @Input() item: TodoItem; 
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter(); 
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { } 

  removeItem() {
    this.remove.emit(this.item);
  }

  ngOnInit() {
  }

  completeItem() {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  
  }

}
