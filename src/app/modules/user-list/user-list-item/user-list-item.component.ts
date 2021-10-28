import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {UsersModel} from "../../../shared/models/users.model";
import {HttpService} from "../../../common/http/http.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/auth/auth.service";

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {
  public isAdmin: boolean;
  @Input() item: UsersModel | undefined;
  @Output() isDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(private httpService: HttpService,
              private authService: AuthService) {
    // @ts-ignore
    this.isAdmin = this.authService.currentUserValue.role !== 'admin';
  }

  delete(event: Event, id: string | undefined){
    event.stopPropagation();
    if(id) {
      this.httpService.delete(id).subscribe(()=> {
        this.isDelete.emit()
      });
    }
    return
  }

  ngOnInit(): void {

  }

}
