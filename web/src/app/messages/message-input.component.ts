import {Component } from "@angular/core";
import {FormGroup, FormControl, FormBuilder} from "@angular/forms";

import { MessageService } from "./message.service";
import { Message } from "./message.model";
@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})
export class MessageInputComponent  {
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

    onClear() {
        this.form.reset();
    }
}
