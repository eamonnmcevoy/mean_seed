import { Component } from "@angular/core";

@Component({
    selector: 'app-messages',
    template: `
        <app-message-list></app-message-list>
        
        <button class="add-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" (click)="editUserDialog.show()">
            <i class="material-icons">add</i>
        </button>
        
        <mdl-dialog #editUserDialog
            [mdl-dialog-config]="{
              clickOutsideToClose: true,
              styles:{'width': '300px'},
              isModal:true,
              openFrom: editUserButton,
              enterTransitionDuration: 400,
              leaveTransitionDuration: 400}">   
            <!--(show)="onDialogShow(dialogRef)"-->
            <!--(hide)="onDialogHide()">-->
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

}
