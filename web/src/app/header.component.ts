import { Component } from "@angular/core";
import {AuthenticationService} from "./auth/authentication.service";

@Component({
    selector: 'app-header',
    template: `
        <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">Mean Demo</span>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation">
                <a routerLinkActive="active" class="mdl-navigation__link mdl-typography--text-uppercase" [routerLink]="['/messages']">Messenger</a>
                <a routerLinkActive="active" *ngIf="!isLoggedIn()" class="mdl-navigation__link mdl-typography--text-uppercase" [routerLink]="['/auth']">
                    <i class="material-icons">person_outline</i> Sign In
                </a>
                <a  *ngIf="isLoggedIn()" class="mdl-navigation__link mdl-typography--text-uppercase" (click)="logOut()">
                    <i class="material-icons">person</i> Log out
                </a>
            </nav>
        </div>        
    `
})
export class HeaderComponent {

  isLoggedIn() {
    return AuthenticationService.isLoggedIn();
  }

  logOut() {
    return AuthenticationService.logout();
  }

}
