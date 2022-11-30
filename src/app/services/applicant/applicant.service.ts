import { IApplicantModel } from '../../models/applicant/request/ApplicantAllModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  allApplicants: IApplicantModel[] = [];
  constructor(private httpClient: HttpClient) {}

  getAllApplicants() {}
  getApplicantById() {}
  addApplicant() {}
  updateApplicant() {}
  deleteApplicant() {}
}
