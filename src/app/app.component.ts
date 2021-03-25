import { Component } from '@angular/core';
import { TodolistService } from './services/todolist.service';
import { TodoItem } from './services/item';
import { ItemFormComponent } from './item-form/item-form.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';

  constructor(private todolist: TodolistService<TodoItem>,
              private form: ItemFormComponent) {}

  addItem(title: string): void{
    this.todolist.add(new TodoItem(title));
  }

  get items(): TodoItem[]{
    return this.todolist.list;
  }

  removeItem(item: TodoItem): void{
    this.todolist.remove(item);
  }

}

