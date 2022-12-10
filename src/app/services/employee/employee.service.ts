import { IEmployeeUpdateRequestModel } from './../../models/employee/request/EmployeeUpdateRequestModel';
import { IEmployeeAddRequestModel } from './../../models/employee/request/EmployeeAddRequestModel';
import { HttpClient } from '@angular/common/http';
import { IEmployeeAllModel } from '../../models/employee/request/EmployeeAllModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}
  getAllEmployees(): Observable<IEmployeeAllModel[]> {
    return this.httpClient.get<IEmployeeAllModel[]>(
      this.apiUrl + '?role=ROLE_EMPLOYEE'
    );
  }
  getEmployeeById(id: number): Observable<IEmployeeAllModel> {
    return this.httpClient.get<IEmployeeAllModel>(this.apiUrl + '/' + id);
  }

  addEmployee(
    data: IEmployeeAddRequestModel
  ): Observable<IEmployeeAddRequestModel> {
    return this.httpClient.post<IEmployeeAddRequestModel>(this.apiUrl, data);
  }

  updateEmployee(
    id: number,
    data: IEmployeeUpdateRequestModel
  ): Observable<IEmployeeUpdateRequestModel> {
    return this.httpClient.put<IEmployeeUpdateRequestModel>(
      this.apiUrl + '/' + id,
      data
    );
  }

  deleteEmployee(id: number) {
    return this.httpClient.delete(this.apiUrl + '/' + id);
  }
}
