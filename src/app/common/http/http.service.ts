import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { UUID } from 'angular2-uuid';
import {Observable} from "rxjs";
import {PostUser, UsersModel} from "../../shared/models/users.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getUserList(): Observable<any>{
    return this.http.get(`${this.url}/users`)
  }


  postUsers(user: PostUser) {
    this.http.post(`${this.url}/users`, {
      ...user,
      id: UUID.UUID()
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe(data => console.log(data))
  }

}
