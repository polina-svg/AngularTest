import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../common/http/http.service";
import {UsersModel} from "../../shared/models/users.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: Observable<UsersModel[]> | undefined ;
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.updateUserList()
  }


  updateUserList() {
    this.userList = this.httpService.getUserList();
  }


  openProfile(id: string) {
    this.router.navigate(['detailspage',{ id: id }]).then(r => {});
  }
}
