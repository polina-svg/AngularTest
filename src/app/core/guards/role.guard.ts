import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../services/login.service";


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  admin = 'admin';
  adminGrandedRole = ['create-user', 'edit-user'];

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.loginService.currentUserValue;




    if(this.adminGrandedRole.includes('') && (currentUser as any).role === this.admin) {
      return true
    }
    return true;
  }

}


// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//
// import { AuthenticationService } from '../_services/authentication.service';
//
// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate {
//   constructor(
//     private router: Router,
//     private authenticationService: AuthenticationService
//   ) {}
//
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const currentUser = this.authenticationService.currentUserValue;
//     if (currentUser) {
//       // authorised so return true
//       return true;
//     }
//
//     // not logged in so redirect to login page with the return url
//     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }}).then();
//     return false;
//   }
// }
