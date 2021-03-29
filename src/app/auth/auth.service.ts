import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

export interface CurrentUser{
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: CurrentUser | null;
  constructor(private router: Router,
              private httpClient: HttpClient){
    this.currentUser = null;
  }
  signIn(userName: string, password: string): void{


    this.httpClient.get<CurrentUser>('https://jsonplaceholder.typicode.com/users/1')
      .subscribe( user => {
        this.currentUser = {id: 1, name: userName, email: password};
        this.router.navigate(['profile']);
      });

  }
  logOut(): void{
    this.currentUser = null;
    this.router.navigate(['']);
  }
}


