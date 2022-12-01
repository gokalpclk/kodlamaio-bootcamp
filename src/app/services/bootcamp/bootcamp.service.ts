import { IBootcampAddRequestModel } from '../../models/bootcamp/request/BootcampAddRequestModel';

import { HttpClient } from '@angular/common/http';
import { IBootcampAllModel } from '../../models/bootcamp/request/BootcampAllModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInstructorAllModel } from 'src/app/models/instructor/request/InstructorAllModel';
import { IBootcampDeleteRequestModel } from 'src/app/models/bootcamp/request/BootcampDeleteRequestModel';
import { IBootcampUpdateRequestModel } from 'src/app/models/bootcamp/request/BootcampUpdateRequestModel';

@Injectable({
  providedIn: 'root',
})
export class BootcampService {
  allBootcamps: IBootcampAllModel[] = [];
  constructor(private httpClient: HttpClient) {}
  path = 'http://localhost:3000/bootcamps';

  getAllBootcamps(): Observable<IBootcampAllModel[]> {
    return this.httpClient.get<IBootcampAllModel[]>(this.path);
  }

  getBootcampById() {}

  addBootcamp(
    bootcamp: IBootcampAddRequestModel
  ): Observable<IBootcampAddRequestModel[]> {
    return this.httpClient.post<IBootcampAddRequestModel[]>(
      this.path,
      bootcamp
    );
  }

  updateBootcamp(
    id: number,
    data: any
  ): Observable<IBootcampUpdateRequestModel> {
    return this.httpClient.put<IBootcampUpdateRequestModel>(
      this.path + '/' + id,
      data
    );
  }

  getBootcampDetail(id: number): Observable<IBootcampAllModel> {
    return this.httpClient.get<IBootcampAllModel>(this.path + '/' + id);
  }

  deleteBootcamp(id: number): Observable<IBootcampDeleteRequestModel> {
    return this.httpClient.delete<IBootcampDeleteRequestModel>(
      this.path + '/' + id
    );
  }
}
