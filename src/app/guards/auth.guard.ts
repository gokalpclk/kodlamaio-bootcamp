import { LoginService } from './../services/login/login.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  userRoleIn = '';
  constructor(private loginService: LoginService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let url: string = state.url;
    return this.checkUserLogin(route, url);
  }
  checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
    if (this.loginService.isLoggedIn()) {
      const userRole = this.loginService.getRole();
      this.userRoleIn = userRole;
      console.log(userRole);
      if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
        return false;
      }
      return true;
    }
    return false;
  }
}
