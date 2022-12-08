import { IBootcampAllModel } from './../../models/bootcamp/request/BootcampAllModel';
import { IInstructorAllModel } from 'src/app/models/instructor/request/InstructorAllModel';
import { IEmployeeAllModel } from './../../models/employee/request/EmployeeAllModel';
import { IApplicantAllModel } from './../../models/applicant/request/ApplicantAllModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  apiUrl = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) {}

  getTotalApplicants(): Observable<IApplicantAllModel[]> {
    return this.httpClient.get<IApplicantAllModel[]>(
      this.apiUrl + 'users' + '?role=ROLE_APPLICANT'
    );
  }
  getTotalEmployee(): Observable<IEmployeeAllModel[]> {
    return this.httpClient.get<IEmployeeAllModel[]>(
      this.apiUrl + 'users' + '?role=ROLE_EMPLOYEE'
    );
  }
  getTotalInstructors(): Observable<IInstructorAllModel[]> {
    return this.httpClient.get<IInstructorAllModel[]>(
      this.apiUrl + 'users' + '?role=ROLE_INSTRUCTOR'
    );
  }
  getTotalBootcamps(): Observable<IBootcampAllModel[]> {
    return this.httpClient.get<IBootcampAllModel[]>(this.apiUrl + 'bootcamps');
  }
}
