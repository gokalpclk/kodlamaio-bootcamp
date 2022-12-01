import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInstructorAllModel } from 'src/app/models/instructor/request/InstructorAllModel';

@Injectable({
  providedIn: 'root',
})
export class InstructorService {
  allInstructors: IInstructorAllModel[] = [];
  constructor(private httpClient: HttpClient) {}

  getAllInstructors() {}
  getInstructorById(id: number) {}
  addInstructor() {}
  updateInstructor() {}
  deleteInstructor() {}
}
