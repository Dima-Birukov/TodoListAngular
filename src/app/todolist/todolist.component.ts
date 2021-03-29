import { Component } from '@angular/core';
import {TodolistService} from './services/todolist.service';
import {TodoItem} from './services/item';

@Component({
  selector: 'app-todolist',
  template: `
    <div class="wrapper">
    <div class="container">
      <h1 style="margin: 0 0 20px 0;
           text-align: center">{{ title }}</h1>

      <app-item-form (add)="addItem($event)"></app-item-form>

      <app-list [items]="items" (remove)="removeItem($event)"></app-list>

      <app-footer [count]="items.length" (clearCompleted)="clearCompleted()"></app-footer>
    </div>
  </div>
  `,
  styles: [
    `.container{
      display: flex;
      flex-direction: column;

      border: 1px solid #000000;
      align-items: center;
    }
    .wrapper{
      display: flex;
      justify-content: center;
    }
    `]
})
export class TodolistComponent {
  title = 'Todo List';

  constructor(private todolist: TodolistService<TodoItem>) {
    todolist.getCurrentTodos();
  }

  addItem(title: string): void{
    this.todolist.add(new TodoItem(title));
  }

  get items(): TodoItem[]{
    return this.todolist.list;
  }

  removeItem(item: TodoItem): void{
    this.todolist.remove(item);
  }

  clearCompleted(): void {
    this.todolist.clearCompleted();
  }

}
