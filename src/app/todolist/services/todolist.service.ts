import {Injectable} from '@angular/core';
import {Completable, TodoItem} from './item';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../auth/auth.service';

@Injectable({providedIn: 'root'})
export class TodolistService<T extends Completable> {

  list: Array<TodoItem> = [];
  title: string;

  constructor(private httpClient: HttpClient,
              private authService: AuthService) {
    this.list = [];
    this.title = 'TodoList';
  }

  add(item: TodoItem): void {

    this.list.push(item);
  }

  remove(item: TodoItem): void {
    this.list = this.list
      .filter(e => e !== item);
  }

  getCount(): number {
    return this.list.length;
  }

  clearCompleted(): void {
    this.list = this.list.filter(e => !e.isCompleted());
  }
  getCurrentTodos(): void{
    this.httpClient.get<TodoItem[]>(`https://jsonplaceholder.typicode.com/todos?userId=${this.authService.currentUser?.id}`)
      .subscribe(items => {
        this.list = items.map( e => new TodoItem(e.title, e.id, e.completed) );
      });
  }
}
