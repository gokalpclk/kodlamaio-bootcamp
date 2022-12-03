import { IEmployeeAllModel } from './../../models/employee/request/EmployeeAllModel';
import { IEmployeeTokenModel } from './../../models/employee/request/EmployeeTokenModel';
import { Observable } from 'rxjs';
import { IEmployeeLoginModel } from './../../models/employee/request/EmployeeLoginModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // applicantsApiUrl:string="http://localhost:3000/applicants"
  // instructorsApiUrl:string="http://localhost:3000/instructors"
  employeesApiUrl: string = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) {}

  employeeLogin(user: IEmployeeLoginModel) {
    return this.httpClient.get<IEmployeeAllModel[]>(
      this.employeesApiUrl +
        '?email=' +
        user.email +
        '&password=' +
        user.password
    );
  }

  isEmployeeAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
