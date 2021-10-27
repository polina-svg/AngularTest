import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {HttpService} from "../../common/http/http.service";
import {map} from "rxjs/operators";
import {CurrentUser, registerFrom, UserConfirmedModel} from "../../shared/models/users.model";
import {PrivateUserModel} from "../../shared/models/users.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<CurrentUser | null>;
  public currentUser: Observable<CurrentUser | null>;

  constructor(private http: HttpService,
              private router: Router) {
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
        console.log('please correct password')
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
    this.http.postUsers({
      login: user.login,
      password: user.password,
      role: user.role
    }).subscribe(() => {
      this.router.navigate(['sign-in']).then();
    })
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['sign-in']).then();
  }


}
