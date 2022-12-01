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
  apiUrl = 'http://localhost:3000/applicants';
  allEmployee: IEmployeeAllModel[] = [];
  constructor(private httpClient: HttpClient) {}
  getAllEmployees(): Observable<IEmployeeAllModel[]> {
    return this.httpClient.get<IEmployeeAllModel[]>(this.apiUrl);
  }
  getEmployeeById(id: number): Observable<IEmployeeAllModel> {
    return this.httpClient.get<IEmployeeAllModel>(this.apiUrl + '/' + id);
  }

  addEmployee(data: IEmployeeAddRequestModel) {
    this.httpClient.post(this.apiUrl, data);
  }

  updateEmployee(
    id: number,
    data: IEmployeeUpdateRequestModel
  ): Observable<IEmployeeAllModel> {
    return this.httpClient.put<IEmployeeAllModel>(this.apiUrl + '/' + id, data);
  }
  
  deleteEmployee(id: number) {
    return this.httpClient.delete(this.apiUrl + '/' + id);
  }
}
