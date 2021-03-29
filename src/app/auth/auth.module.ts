import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [SignInComponent],
  exports: [SignInComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
