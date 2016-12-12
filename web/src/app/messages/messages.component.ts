import { Component } from "@angular/core";
import {AuthenticationService} from "../auth/authentication.service";

@Component({
    selector: 'app-messages',
    template: `
        <app-message-list></app-message-list>
        
        <button *ngIf="isLoggedIn()" #newMessageButton class="add-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" (click)="newMessageDialog.show()">
            <i class="material-icons">add</i>
        </button>
        
        <mdl-dialog #newMessageDialog
            [mdl-dialog-config]="{
              clickOutsideToClose: true,
              styles:{'width': '300px'},
              isModal:true,
              openFrom: newMessageButton,
              enterTransitionDuration: 400,
              leaveTransitionDuration: 400}">   
            <app-message-input></app-message-input>
        </mdl-dialog>
    `,
    styles: [`
        .add-button {
            position: fixed;
            right: 25px;
            bottom: 25px;
            z-index: 1000;
        }
    `]
})
export class MessagesComponent {
  isLoggedIn() {
    return AuthenticationService.isLoggedIn();
  }
}
