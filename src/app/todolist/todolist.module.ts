import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import {FooterComponent} from './footer/footer.component';
import {ListComponent} from './list/list.component';
import {ItemFormComponent} from './item-form/item-form.component';
import { CheckboxOnClickDirective } from './list/checkbox-on-click.directive';



@NgModule({
  declarations: [
    TodolistComponent,
    FooterComponent,
    ListComponent,
    ItemFormComponent,
    CheckboxOnClickDirective],
  exports: [
    TodolistComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TodolistModule { }
