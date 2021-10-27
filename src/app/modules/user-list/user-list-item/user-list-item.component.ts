import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {UsersModel} from "../../../shared/models/users.model";
import {HttpService} from "../../../common/http/http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {
  public isAdmin = "admin";
  @Input() item: UsersModel | undefined;

  constructor(private httpService: HttpService) { }

  delete(id: string | undefined){
    if(id) {
      this.httpService.delete(id);
    }
    return
  }

  ngOnInit(): void {

  }

}
