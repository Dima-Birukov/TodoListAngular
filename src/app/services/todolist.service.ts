import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TodolistService<T>{
  list: Array<T>;
  title: string;

  constructor() {
    this.list = [];
    this.title = 'TodoList';
  }

  add(item: T): void{

    this.list.push(item);
  }
  remove(item: T): void{
    this.list = this.list
      .filter(e =>  e !== item);
  }
  getCount(): number{
    return this.list.length;
  }


}
