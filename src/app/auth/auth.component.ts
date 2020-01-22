import { Component, EventEmitter, Output } from '@angular/core';
import { UserModel } from '../models';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  public username = '';

  @Output()
  public authenticated: EventEmitter<UserModel> = new EventEmitter<UserModel>();

  public login(): void {
    this.formatFormData();

    if ( this.validateUsername() ) {
      const user = new UserModel(this.username);
      this.authenticated.emit(user);
      this.resetFormData();
    }
  }

  private formatFormData(): void {
    this.username = this.username.trim();
  }

  private validateUsername(): boolean {
    if ( !this.username ) {
      alert('Please enter username');
      return false;
    }
    return true;
  }

  private resetFormData(): void {
    this.username = '';
  }
}
