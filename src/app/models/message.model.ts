import { MessageParams } from './message.params';

export class MessageModel {
  static fromParams(messageParams: MessageParams): MessageModel {
    return new MessageModel(messageParams.text, messageParams.author);
  }

  constructor(public text: string, public author: string) {}
}
