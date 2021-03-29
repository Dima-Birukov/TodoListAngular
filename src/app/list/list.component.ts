import {Component, Input, EventEmitter, Output} from '@angular/core';
import {TodolistService} from '../services/todolist.service';
import {TodoItem} from '../services/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  items: Array<TodoItem> = [];
  @Output()
  remove = new EventEmitter<TodoItem>();

  toggleCompleted(item: TodoItem): void{
    item.toggleCompleted();
  }


}
