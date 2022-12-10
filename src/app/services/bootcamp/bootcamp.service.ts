import { IBootcampAddRequestModel } from '../../models/bootcamp/request/BootcampAddRequestModel';

import { HttpClient } from '@angular/common/http';
import { IBootcampAllModel } from '../../models/bootcamp/request/BootcampAllModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBootcampDeleteRequestModel } from 'src/app/models/bootcamp/request/BootcampDeleteRequestModel';
import { IBootcampUpdateRequestModel } from 'src/app/models/bootcamp/request/BootcampUpdateRequestModel';

@Injectable({
  providedIn: 'root',
})
export class BootcampService {
  apiUrl = 'http://localhost:3000/bootcamps';
  constructor(private httpClient: HttpClient) {}

  getAllBootcamps(): Observable<IBootcampAllModel[]> {
    return this.httpClient.get<IBootcampAllModel[]>(this.apiUrl);
  }

  getBootcampById(id: number): Observable<IBootcampAllModel> {
    return this.httpClient.get<IBootcampAllModel>(this.apiUrl + '/' + id);
  }
  getBootcampsByInstructorId(id: number): Observable<IBootcampAllModel[]> {
    return this.httpClient.get<IBootcampAllModel[]>(
      this.apiUrl + '?instructorId=' + id
    );
  }
  addBootcamp(
    data: IBootcampAddRequestModel
  ): Observable<IBootcampAddRequestModel[]> {
    return this.httpClient.post<IBootcampAddRequestModel[]>(this.apiUrl, data);
  }

  updateBootcamp(
    id: number,
    data: IBootcampUpdateRequestModel
  ): Observable<IBootcampUpdateRequestModel> {
    return this.httpClient.put<IBootcampUpdateRequestModel>(
      this.apiUrl + '/' + id,
      data
    );
  }

  deleteBootcamp(id: number): Observable<IBootcampDeleteRequestModel> {
    return this.httpClient.delete<IBootcampDeleteRequestModel>(
      this.apiUrl + '/' + id
    );
  }
}
