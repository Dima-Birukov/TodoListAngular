import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
        <div>
        <li><a routerLink="/">home</a></li>
        <li><a routerLink="/list">list</a></li>
        </div>
      <li><a routerLink="/profile">profile</a> </li>
    </ul>
    <router-outlet></router-outlet>`,
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

}

