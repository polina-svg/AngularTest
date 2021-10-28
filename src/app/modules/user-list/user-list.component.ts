import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../../common/http/http.service";
import {UsersModel} from "../../shared/models/users.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: UsersModel[] | undefined ;
  public searchControl = this.fb.control(['']);

  constructor(private httpService: HttpService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(500)
    ).subscribe((value: string) => {
      if(!value) {
        this.updateUserList();
        return
      }
      if(this.userList && this.userList.length) {
        this.userList = this.userList.filter((user) => user.firstName.toLowerCase().includes(value.toLowerCase()))
      }
    });
    this.httpService.getUserList().subscribe((userList: UsersModel[] ) => {
      this.userList = userList;
    });
  }


  updateUserList() {
    this.httpService.getUserList().toPromise().then((data) => {
      this.userList = data;
    })
  }


  openProfile(id: string) {
    this.router.navigate(['detail-page', id]).then(r => {});
  }
}
