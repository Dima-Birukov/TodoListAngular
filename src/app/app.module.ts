import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {TodolistModule} from './todolist/todolist.module';
import {AuthModule} from './auth/auth.module';
import {RouterModule} from '@angular/router';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {TodolistComponent} from './todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodolistModule,
    AuthModule,
    RouterModule.forRoot([
      {path: '', component: SignInComponent},
      {path: 'list', component: TodolistComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
