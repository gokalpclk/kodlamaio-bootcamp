import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBlackListAllModel } from 'src/app/models/blackList/request/BlackListAllModel';
import { IBlackListAddRequestModel } from 'src/app/models/blackList/request/BlackListAddRequestModel';
import { IBlackListUpdateRequestModel } from 'src/app/models/blackList/request/BlackListUpdateRequestModel';
import { IBlackListDeleteRequestModel } from 'src/app/models/blackList/request/BlackListDeleteRequestModel';

@Injectable({
  providedIn: 'root',
})
export class BlackListService {
  apiUrl = ' http://localhost:3000/blackList';
  allBlackLists: IBlackListAllModel[] = [];
  constructor(private httpClient: HttpClient) {}

  getAllBlackLists(): Observable<IBlackListAllModel[]> {
    return this.httpClient.get<IBlackListAllModel[]>(this.apiUrl);
  }
  getBlackListById(id: number): Observable<IBlackListAllModel> {
    return this.httpClient.get<IBlackListAllModel>(this.apiUrl + '/' + id);
  }
  addBlackList(
    data: IBlackListAddRequestModel
  ): Observable<IBlackListAddRequestModel> {
    return this.httpClient.post<IBlackListAddRequestModel>(this.apiUrl, data);
  }
  updateBlackList(
    id: number,
    data: IBlackListUpdateRequestModel
  ): Observable<IBlackListUpdateRequestModel> {
    return this.httpClient.put<IBlackListUpdateRequestModel>(
      this.apiUrl + '/' + id,
      data
    );
  }
  deleteBlackList(id: number) {
    return this.httpClient.delete<IBlackListDeleteRequestModel>(
      this.apiUrl + '/' + id
    );
  }
}
