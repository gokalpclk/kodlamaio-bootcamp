import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IInstructorModel } from 'src/app/models/instructor/InstructorModel';

@Injectable({
  providedIn: 'root',
})
export class InstructorService {
  allInstructors: IInstructorModel[] = [];
  constructor(private httpClient: HttpClient) {}

  getAllInstructors() {}
  getInstructorById(id: number) {}
  addInstructor() {}
  updateInstructor() {}
  deleteInstructor() {}
}
