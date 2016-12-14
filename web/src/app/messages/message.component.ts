import { Component, Input } from "@angular/core";

import { Message } from "./message.model";
import { MessageService } from "./message.service";
import {AuthenticationService} from "../auth/authentication.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
        img {
            width: 100%;
            height: 356px;
        }
        
        .mdl-card__supporting-text{
            position: absolute;
            bottom: 0px;
        }
        
        .mdl-card__title{
            width: inherit;
            max-height: 80%;
        }
    `]
})
export class MessageComponent {
    public edit: boolean;
    @Input() message: Message;

    constructor(private messageService: MessageService) {
      this.edit = false;
    }

    isMyMessage() {
      return this.message.userId === localStorage.getItem('userId') && this.isLoggedIn();
    }

    isLoggedIn() {
      return AuthenticationService.isLoggedIn();
    }

    onEdit() {
      this.edit = true;
    }

    acceptChanges() {
      this.edit = false;
      this.messageService.updateMessage(this.message)
        .subscribe(
          result => console.log(result)
        );

    }

    cancelChanges() {
      this.edit = false;
    }

    onDelete() {
        this.messageService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
    }
}
