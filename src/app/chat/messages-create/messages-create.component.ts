import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-messages-create',
  templateUrl: './messages-create.component.html',
  styleUrls: ['./messages-create.component.css']
})
export class MessagesCreateComponent {
  public message = '';

  @Output()
  public send: EventEmitter<string> = new EventEmitter<string>();

  public sendMessage(): void {
    this.formatFormData();

    if ( this.validateMessage() ) {
      this.send.emit(this.message);
      this.resetFormData();
    }
  }

  private formatFormData(): void {
    this.message = this.message.trim();
  }

  private validateMessage(): boolean {
    if ( !this.message ) {
      alert('Please enter a message');
      return false;
    }
    return true;
  }

  private resetFormData(): void {
    this.message = '';
  }
}
