import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MessageModel, MessageParams, UserModel } from '../models';
import { WebSocketSubject } from 'rxjs/internal-compatibility';
import { environment } from '../../environments/environment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  public messages: MessageModel[] = [];

  private messages$ = new WebSocketSubject<MessageParams>(environment.apiUrl);
  private messagesSubscription: Subscription;

  @Input()
  public currentUser: UserModel;

  @Output()
  public logout: EventEmitter<undefined> = new EventEmitter<undefined>();

  public ngOnInit(): void {
    this.messagesSubscription = this.messages$.subscribe(this.onReceivedMessage.bind(this));
  }

  public ngOnDestroy(): void {
    this.messagesSubscription.unsubscribe();
  }

  private onReceivedMessage(messageParams: MessageParams): void {
    const message = MessageModel.fromParams(messageParams);
    this.messages.unshift(message);
  }

  public logoutUser(): void {
    this.logout.emit();
  }

  public send(messageText: string): void {
    this.messages$.next({
      text: messageText,
      author: this.currentUser.name
    });
  }
}
