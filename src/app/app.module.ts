import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {TodolistModule} from './todolist/todolist.module';
import {RouterModule} from '@angular/router';
import {TodolistComponent} from './todolist/todolist.component';
import {UserModule} from './user/user.module';
import {ProfileComponent} from './user/profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import {LimitClicksDirective} from './auth/limit-clicks.directive';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TodolistModule,
    UserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'auth', loadChildren: () =>
          import('./auth/auth.module').then(m => m.AuthModule)
      },
      {path: 'list', component: TodolistComponent},
      {path: 'profile', component: ProfileComponent},
    ])
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
