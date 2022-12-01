import { HttpClient } from '@angular/common/http';
import { IEmployeeAllModel } from '../../models/employee/request/EmployeeAllModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  allEmployee: IEmployeeAllModel[] = [];
  constructor(private httpClient: HttpClient) {}
  getAllEmployees() {}
  getEmployeeById() {}
  addEmployee() {}
  updateEmployee() {}
  deleteEmployee() {}
}
