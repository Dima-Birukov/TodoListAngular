import {Component} from '@angular/core';
import {AuthService, CurrentUser} from './auth/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <a routerLink="/auth">sign in</a>
    </div>
    <ul *ngIf="currentUser">
        <div>
          <li><a routerLink="/list">list</a></li>
          <li><a routerLink="/profile">profile</a> </li>
        </div>
        <span (click)="logOut()">logout</span>

    </ul>

    <router-outlet></router-outlet>
  `,
  styles: [
    `
      ul{
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        justify-content: space-between;
      }
      li{
        display: inline;
        margin: 10px
      }
      a{
        text-decoration: none;
      }
    `
  ]
})
export class AppComponent {
  constructor(public authService: AuthService) {}
  get currentUser(): CurrentUser | null{
    return this.authService.currentUser;
  }
  logOut(): void{
    this.authService.logOut();
  }
}

