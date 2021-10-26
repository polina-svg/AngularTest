import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, of} from "rxjs";
import {User} from "../../shared/models/users.model";
import {Router} from "@angular/router";
import {HttpService} from "../../common/http/http.service";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpService,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(<string>localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }


  login({username, password} : {username: string, password: string}) {
    this.http.getUserList().pipe(
      filter((user: User) => {
        console.log(user)
        return true
      })
    ).subscribe()
    // return this.http.post<User>(this.authURL, { username, password })
    //   .pipe(map(user => {
    //     // login successful if there's a jwt token in the response
    //     if (user && user.token) {
    const user: any = {
      username: 'user',
      password: '1',
      id: 1,
      token: 'token',
      firstName: 'John',
      lastName: 'Smith'
    };
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
    this.router.navigate(['']).then();
    return of(user);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['sign-in']).then();
  }


}
