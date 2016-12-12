import {Component, OnInit } from "@angular/core";
import {NgForm, FormGroup, FormControl, FormBuilder} from "@angular/forms";

import { MessageService } from "./message.service";
import { Message } from "./message.model";
@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})
export class MessageInputComponent  implements OnInit  {
    message: Message;
    public form: FormGroup;
    public content = new FormControl('');

    constructor(private messageService: MessageService, private fb: FormBuilder) {
      this.form = fb.group({
        'content': this.content,
      });
    }

    onSubmit() {
        const message = new Message(this.content.value, 'Max');
        this.messageService.addMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this.form.reset();
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );

    }
}
