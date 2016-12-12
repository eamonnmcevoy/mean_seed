import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
import { Ng2UploaderModule } from 'ng2-uploader';

import { AppComponent } from './app.component';
import {SigninComponent} from "./auth/signin.component";
import {SignupComponent} from "./auth/signup.component";
import {LogoutComponent} from "./auth/logout.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {MessagesComponent} from "./messages/messages.component";
import {MessageInputComponent} from "./messages/message-input.component";
import {MessageListComponent} from "./messages/message-list.component";
import {MessageComponent} from "./messages/message.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {AuthenticationService} from "./auth/authentication.service";

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    MessagesComponent,
    AuthenticationComponent,
    HeaderComponent,
    LogoutComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule,
    MdlModule,
    Ng2UploaderModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
