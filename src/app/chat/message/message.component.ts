import { Component, Input } from '@angular/core';
import { MessageModel, UserModel } from '../../models';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input()
  public message: MessageModel;
  @Input()
  public currentUser: UserModel;

  public get isCurrentUserMessage(): boolean {
    return this.message.author === this.currentUser.name;
  }

  public get author(): string {
    return this.isCurrentUserMessage ? 'You' : this.message.author;
  }
}
