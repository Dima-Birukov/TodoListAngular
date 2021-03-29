import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {TodolistModule} from './todolist/todolist.module';
import {AuthModule} from './auth/auth.module';
import {RouterModule} from '@angular/router';
import {SignInComponent} from './auth/sign-in/sign-in.component';
import {TodolistComponent} from './todolist/todolist.component';
import {UserModule} from './user/user.module';
import {ProfileComponent} from './user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodolistModule,
    AuthModule,
    UserModule,
    RouterModule.forRoot([
      {path: '', component: SignInComponent},
      {path: 'list', component: TodolistComponent},
      {path: 'profile', component: ProfileComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
