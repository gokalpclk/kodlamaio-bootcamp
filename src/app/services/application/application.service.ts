import { IApplicationUpdateRequestModel } from './../../models/application/request/ApplicationUpdateRequestModel';
import { IApplicationAddRequestModel } from './../../models/application/request/ApplicationAddRequestModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IApplicationAllModel } from './../../models/application/request/ApplicationAllModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  apiUrl = 'http://localhost:3000/applications';
  allApplications: IApplicationAllModel[] = [];
  constructor(private httpClient: HttpClient) {}

  getAllApplications(): Observable<IApplicationAllModel[]> {
    return this.httpClient.get<IApplicationAllModel[]>(this.apiUrl);
  }

  addApplication(data: IApplicationAddRequestModel) {
    return this.httpClient.post<IApplicationAddRequestModel[]>(
      this.apiUrl,
      data
    );
  }

  updateApplication(
    id: number,
    data: IApplicationUpdateRequestModel
  ): Observable<IApplicationUpdateRequestModel> {
    return this.httpClient.put<IApplicationUpdateRequestModel>(
      this.apiUrl + '/' + id,
      data
    );
  }
}