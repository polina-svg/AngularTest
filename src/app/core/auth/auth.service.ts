import {Injectable} from '@angular/core';
import {BehaviorSubject, forkJoin, Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {HttpService} from "../../common/http/http.service";
import { UUID } from 'angular2-uuid';
import {map} from "rxjs/operators";
import {CurrentUser, registerFrom, UserConfirmedModel} from "../../shared/models/users.model";
import {PrivateUserModel} from "../../shared/models/users.model";
import {Toast, ToastrService} from "ngx-toastr";



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<CurrentUser | null>;
  public currentUser: Observable<CurrentUser | null>;

  constructor(private http: HttpService,
              private router: Router,
              private toastr: ToastrService) {
    this.currentUserSubject = new BehaviorSubject<CurrentUser | null>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): CurrentUser | null {
    return this.currentUserSubject.value;
  }


  login({login, password}: UserConfirmedModel) {


    this.http.getUserPrivateList().pipe(
      map((users: PrivateUserModel[]) => {
        return users.find((user) => user.login === login)
      })
    ).subscribe((user) => {
      // @ts-ignore
      if (!Object.keys(user).length) {
        console.log('please sign-up');
        this.router.navigate(['sign-up']).then();
        return
      }
      if (user && user.password !== password) {

          this.toastr.error('incorrect password!', 'please check password');

        return
      }
      if (user) {
        const currentUser = {id: user.id, role: user.role};
        this.http.getUserInfoById(currentUser.id).subscribe((info) => {
          const infoUser = {
            ...currentUser,
            ...info
          }
          localStorage.setItem('currentUser', JSON.stringify(infoUser));
          this.currentUserSubject.next(infoUser);
          this.router.navigate(['']).then();
        });
      }
    });
  }

  register(user: registerFrom) {
    const id = UUID.UUID();

    const privateUserData = {
      login: user.login,
      password: user.password,
      role: user.role,
      id
    }
    const defaultGeneralInfo = {
      id,
      firstName: user.firstName,
      lastName: user.lastName,
      age: '',
      online: false,
      photo: '',
      university: []
    }
    forkJoin({
      postPrivate: this.http.postUsers(privateUserData),
      postGeneral: this.http.updateGeneralInformation(defaultGeneralInfo)
    }).subscribe((_) => {
      //тут тоже вывести что тип успешно зарегат чекрез тостер
      this.router.navigate(['']).then();
    })

  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['sign-in']).then();
  }


}
