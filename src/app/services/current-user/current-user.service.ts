import { IApplicantAddRequestModel } from './../../models/applicant/request/ApplicantAddRequestModel';
import { IApplicantDeleteRequestModel } from './../../models/applicant/request/ApplicantDeleteRequestModel';
import { IApplicantUpdateRequestModel } from './../../models/applicant/request/ApplicantUpdateRequestModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApplicantAllModel } from './../../models/applicant/request/ApplicantAllModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  apiUrl: string = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}
  getUserById(id: number): Observable<IApplicantAllModel> {
    return this.httpClient.get<IApplicantAllModel>(this.apiUrl + '/' + id);
  }

  updateUser(
    id: number,
    data: IApplicantUpdateRequestModel
  ): Observable<IApplicantUpdateRequestModel> {
    return this.httpClient.put<IApplicantUpdateRequestModel>(
      this.apiUrl + '/' + id,
      data
    );
  }
  deleteUser(id: number): Observable<IApplicantDeleteRequestModel> {
    return this.httpClient.delete<IApplicantDeleteRequestModel>(
      this.apiUrl + '/' + id
    );
  }

  addUser(data:IApplicantAddRequestModel): Observable<IApplicantAddRequestModel> {
    return this.httpClient.post<IApplicantAddRequestModel>(this.apiUrl, data);
  }
}
