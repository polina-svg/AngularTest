import { Component, OnInit } from '@angular/core';
import {HttpService} from "../common/http/http.service";
import {UsersModel} from "../shared/models/users.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: Observable<UsersModel[]> | undefined ;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.userList = this.httpService.getUserList();
  }

}
