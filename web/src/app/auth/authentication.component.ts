import {Component} from "@angular/core";
import {AuthenticationService} from "./authentication.service";

@Component({
    selector: 'app-authentication',
    template: `
        <!--<ul>-->
            <!--<li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signin']">Signin</a></li>-->
            <!--<li routerLinkActive="active"><a [routerLink]="['signup']">Signup</a></li>-->
            <!--<li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['logout']">Logout</a></li>-->
        <!--</ul>-->
        <div class="row spacing">
           <router-outlet></router-outlet>
        </div>
    `
})
export class AuthenticationComponent{
  isLoggedIn() {
    return AuthenticationService.isLoggedIn();
  }
}
