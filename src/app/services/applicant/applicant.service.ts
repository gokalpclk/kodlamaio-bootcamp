import { IApplicantUpdateRequestModel } from './../../models/applicant/request/ApplicantUpdateRequestModel';
import { IApplicantAddRequestModel } from './../../models/applicant/request/ApplicantAddRequestModel';
import { IApplicantAllModel } from '../../models/applicant/request/ApplicantAllModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApplicantDeleteRequestModel } from 'src/app/models/applicant/request/ApplicantDeleteRequestModel';

@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  apiUrl = 'http://localhost:3000/users';
  // allApplicants: IApplicantAllModel[] = [];
  constructor(private httpClient: HttpClient) {}

  getAllApplicants(): Observable<IApplicantAllModel[]> {
    return this.httpClient.get<IApplicantAllModel[]>(
      this.apiUrl + '?role=ROLE_APPLICANT' + '&state=1'
    );
  }
  getApplicantById(id: number): Observable<IApplicantAllModel> {
    return this.httpClient.get<IApplicantAllModel>(this.apiUrl + '/' + id);
  }
  addApplicant(
    data: IApplicantAddRequestModel
  ): Observable<IApplicantAddRequestModel> {
    return this.httpClient.post<IApplicantAddRequestModel>(this.apiUrl, data);
  }
  updateApplicant(
    id: number,
    data: IApplicantUpdateRequestModel
  ): Observable<IApplicantUpdateRequestModel> {
    return this.httpClient.put<IApplicantUpdateRequestModel>(
      this.apiUrl + '/' + id,
      data
    );
  }
  deleteApplicant(id: number): Observable<IApplicantDeleteRequestModel> {
    return this.httpClient.delete<IApplicantDeleteRequestModel>(
      this.apiUrl + '/' + id
    );
  }

  updateApplicantState(
    id: number,
    stateval: number
  ): Observable<IApplicantUpdateRequestModel> {
    return this.httpClient.patch<IApplicantUpdateRequestModel>(
      this.apiUrl + '/' + id,
      { state: stateval }
    );
  }
}
