import { Observable } from 'rxjs';
import { IInstructorUpdateRequestModel } from './../../models/instructor/request/InstructorUpdateRequestModel';
import { IInstructorAddRequestModel } from './../../models/instructor/request/InstructorAddRequestModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInstructorAllModel } from 'src/app/models/instructor/request/InstructorAllModel';

@Injectable({
  providedIn: 'root',
})
export class InstructorService {
  allInstructors: IInstructorAllModel[] = [];
  apiUrl = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {}

  getAllInstructors(): Observable<IInstructorAllModel[]> {
    return this.httpClient.get<IInstructorAllModel[]>(
      this.apiUrl + '?role=ROLE_INSTRUCTOR'
    );
  }

  getInstructorById(id: number): Observable<IInstructorAllModel> {
    return this.httpClient.get<IInstructorAllModel>(this.apiUrl + '/' + id);
  }

  addInstructor(
    data: IInstructorAddRequestModel
  ): Observable<IInstructorAddRequestModel> {
    return this.httpClient.post<IInstructorAddRequestModel>(this.apiUrl, data);
  }

  updateInstructor(
    id: number,
    data: IInstructorUpdateRequestModel
  ): Observable<IInstructorUpdateRequestModel> {
    return this.httpClient.put<IInstructorUpdateRequestModel>(
      this.apiUrl + '/' + id,
      data
    );
  }
  deleteInstructor(id: number) {
    return this.httpClient.delete(this.apiUrl + '/' + id);
  }
}
