import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { forkJoin, Observable } from 'rxjs';
import { PostUser, User, UsersModel } from '../../shared/models/users.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url = 'http://localhost:3000';
  private header = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  constructor(private http: HttpClient) {}

  getUserPrivateList(): Observable<any> {
    return this.http.get(`${this.url}/privateUserDataList`);
  }

  getUserList(): Observable<any> {
    return this.http.get(`${this.url}/generalInformation`);
  }

  getUserInfoById(id: string): Observable<any> {
    return this.http.get(`${this.url}/generalInformation/?userId=${id}`);
  }

  postUsers(user: PostUser): Observable<any> {
    return this.http.post(`${this.url}/privateUserDataList`,user,this.header)
  }

  updateGeneralInformation(information: any, id?: string): Observable<any> {
    if(id) {
      return this.http.put(`${this.url}/generalInformation/${information.id}`, information)
    }
    return this.http.post(`${this.url}/generalInformation/`, information, this.header)
  }

  update(user: UsersModel) {
    return this.http.put(`${this.url}}/users/${user.id}`, user);
  }

  delete(id: string) {
    return forkJoin({
      deletePrivate:this.http.delete(`${this.url}/privateUserDataList/${id}`),
      deleteGeneral: this.http.delete(`${this.url}/generalInformation/${id}`)
    })
  }
}
