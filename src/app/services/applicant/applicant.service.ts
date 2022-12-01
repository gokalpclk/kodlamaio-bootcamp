import { IApplicantUpdateRequestModel } from './../../models/applicant/request/ApplicantUpdateRequestModel';
import { IApplicantAddRequestModel } from './../../models/applicant/request/ApplicantAddRequestModel';
import { IApplicantAllModel } from '../../models/applicant/request/ApplicantAllModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  apiUrl = 'http://localhost:3000/applicants';
  allApplicants: IApplicantAllModel[] = [];
  constructor(private httpClient: HttpClient) {}

  getAllApplicants() {
    this.httpClient
      .get<IApplicantAllModel[]>(this.apiUrl)
      .subscribe((response) => {
        this.allApplicants = response;
        console.log(response);
      });
  }
  getApplicantById(id: number) {
    this.httpClient.get<IApplicantAllModel>(this.apiUrl + '/' + id);
  }
  addApplicant(data: IApplicantAddRequestModel) {
    this.httpClient.post<IApplicantAddRequestModel>(this.apiUrl, data);
  }
  updateApplicant(id: number, data: IApplicantUpdateRequestModel) {
    this.httpClient.put<IApplicantAllModel>(this.apiUrl + '/' + id, data);
  }
  deleteApplicant(id: number) {
    this.httpClient.delete<IApplicantAllModel>(this.apiUrl + '/' + id);
  }
}
