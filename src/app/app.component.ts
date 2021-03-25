import { Component } from '@angular/core';
import { TodolistService } from './services/todolist.service';
import { TodoItem } from './services/item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';

  constructor(public todolist: TodolistService<TodoItem>) {}

  addItem(title: string): void{
    this.todolist.add(new TodoItem(title));
  }
  get items(): Array<TodoItem>{
    return this.todolist.list;
  }
  removeItem(item: TodoItem): void {
    this.todolist.remove(item);
  }
  toggleCompleted(item: TodoItem): void {
    item.toggleCompleted();
  }
}

