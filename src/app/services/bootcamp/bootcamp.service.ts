import { HttpClient } from '@angular/common/http';
import { IBootcampAllModel } from '../../models/bootcamp/request/BootcampAllModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BootcampService {
  allBootcamps: IBootcampAllModel[] = [];
  constructor(private httpClient: HttpClient) {}

  getAllBootcamps() {}
  getBootcampById() {}
  addBootcamp() {}
  updateBootcamp() {}
  deleteBootcamp() {}
}
