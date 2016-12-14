import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message } from "./message.model";
import {environment} from "../../environments/environment";

@Injectable()
export class MessageService {
  private route = environment.serverPath + '/message';
  private requestHeaders = new Headers({'Content-Type': 'application/json'});
  private messages: Message[] = [];
  messageIsEdit = new EventEmitter<Message>();

  constructor(private http: Http) {
  }

  addMessage(message: Message) {
    const body = JSON.stringify(message);
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.post(this.route + token, body, {headers: this.requestHeaders})
      .map((response: Response) => {
        const result = response.json();
        const message = new Message(
          result.obj.content,
          result.obj.user.firstName,
          result.obj._id,
          result.obj.user._id);
        this.messages.push(message);
        return message;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getMessages() {
    return this.http.get(this.route)
      .map((response: Response) => {
        const messages = response.json().obj;
        let transformedMessages: Message[] = [];
        for (let message of messages) {
          transformedMessages.push(new Message(
            message.content,
            message.user.firstName,
            message._id,
            message.user._id)
          );
        }
        this.messages = transformedMessages;
        return transformedMessages;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  editMessage(message: Message) {
    this.messageIsEdit.emit(message);
  }

  updateMessage(message: Message) {
    const body = JSON.stringify(message);
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.patch(this.route +'/'+ message.messageId + token, body, {headers: this.requestHeaders})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteMessage(message: Message) {
    this.messages.splice(this.messages.indexOf(message), 1);
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.delete(this.route +'/'+ message.messageId + token)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }
}
