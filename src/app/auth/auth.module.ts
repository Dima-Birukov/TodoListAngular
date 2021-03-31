import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';
import { AuthComponent } from './auth.component';
import {LimitClicksDirective} from './limit-clicks.directive';





@NgModule({
  declarations: [SignInComponent, RegisterComponent, AuthComponent, LimitClicksDirective],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '', component: SignInComponent},
      {path: 'register', component: RegisterComponent}
    ]),
  ]
})
export class AuthModule { }
