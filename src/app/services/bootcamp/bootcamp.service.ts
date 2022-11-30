import { HttpClient } from '@angular/common/http';
import { IBootcampModel } from './../../models/bootcamp/BootcampModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BootcampService {
  allBootcamps: IBootcampModel[] = [];
  constructor(private httpClient: HttpClient) {}

  getAllBootcamps(){}
  getBootcampById(){}
  addBootcamp(){}
  updateBootcamp(){}
  deleteBootcamp(){}
}
