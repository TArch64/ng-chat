import { Component } from '@angular/core';
import { UserModel } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentUser: UserModel = null;

  public get isAuthenticated(): boolean {
    return this.currentUser && !!this.currentUser.name;
  }

  public logout(): void {
    this.currentUser = null;
  }

  public onAuthenticated(user: UserModel): void {
    this.currentUser = user;
  }
}
