import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessagesCreateComponent } from './chat/messages-create/messages-create.component';
import { AuthComponent } from './auth/auth.component';
import { MessageComponent } from './chat/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessagesCreateComponent,
    AuthComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
