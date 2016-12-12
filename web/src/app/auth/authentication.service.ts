import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "./user.model";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthenticationService {
  private route = environment.serverPath + '/user';
  private requestHeaders = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  signup(user: User) {
    const body = JSON.stringify(user);
    return this.http.post(this.route, body, {headers: this.requestHeaders})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  signin(user: User) {
    const body = JSON.stringify(user);
    return this.http.post(this.route+'/signin', body, {headers: this.requestHeaders})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  static logout() {
    localStorage.clear();
  }

  static isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}
