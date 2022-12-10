import { ILoginModel } from './../../models/login/LoginModel';
import { IEmployeeAllModel } from './../../models/employee/request/EmployeeAllModel';
import { IEmployeeLoginModel } from './../../models/employee/request/EmployeeLoginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  usersApiUrl = 'http://localhost:3000/users';
  isLogin = false;
  roleAs: string;

  constructor(private httpClient: HttpClient) {}

  employeeLogin(user: any) {
    return this.httpClient.get<IEmployeeAllModel[]>(
      this.usersApiUrl + '?email=' + user.email + '&password=' + user.password
    );
  }

  login(value: string) {
    this.isLogin = true;
    this.roleAs = value;
    // localStorage.setItem('STATE', 'true');
    localStorage.setItem('role', this.roleAs);
    return { success: this.isLogin, role: this.roleAs };
  }

  // logout() {
  //   this.isLogin = false;
  //   this.roleAs = '';
  //   // localStorage.setItem('STATE', 'false');
  //   localStorage.setItem('role', '');
  //   return { success: this.isLogin, role: '' };
  // }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('token');
    if (loggedIn) this.isLogin = true;
    else this.isLogin = false;
    return this.isLogin;
  }

  getRole() {
    this.roleAs = localStorage.getItem('role');
    return this.roleAs;
  }
}
