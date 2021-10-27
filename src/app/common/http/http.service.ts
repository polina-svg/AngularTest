import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { UUID } from 'angular2-uuid';
import {Observable} from "rxjs";
import {PostUser, User, UsersModel} from "../../shared/models/users.model";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}


  getUserPrivateList(): Observable<any>{
    return this.http.get(`${this.url}/privateUserDataList`)
  }

  getUserList(): Observable<any>{
    return this.http.get(`${this.url}/generalInformation`)
  }

  getUserInfoById(id:string): Observable<any>{
    return this.http.get(`${this.url}/generalInformation/?userId=${id}`)
  }


  postUsers(user: PostUser): Observable<any> {
    const id = UUID.UUID();
    const regRequest = this.http.post(`${this.url}/privateUserDataList`, {
      ...user,
      id
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    regRequest.subscribe(() => {

    })
    return regRequest
  }


  update(user: UsersModel) {
    return this.http.put(`${this.url}}/users/${user.userId}`, user);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/privateUserDataList/${id}`);
  }
}
