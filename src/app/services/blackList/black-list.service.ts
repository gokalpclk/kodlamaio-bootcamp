import { IBlackListDeleteRequestModel } from './../../models/blackList/request/BlacklistDeleteRequestModel';
import { IBlackListUpdateRequestModel } from './../../models/blackList/request/BlacklistUpdateRequestModel';
import { IBlackListAddRequestModel } from './../../models/blackList/request/BlacklistAddRequestModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBlackListAllModel } from 'src/app/models/blackList/request/BlackListAllModel';

@Injectable({
  providedIn: 'root',
})
export class BlackListService {
  apiUrl = 'http://localhost:3000/blacklist';
  constructor(private httpClient: HttpClient) {}

  getAllBlackLists(): Observable<IBlackListAllModel[]> {
    return this.httpClient.get<IBlackListAllModel[]>(this.apiUrl);
  }
  getBlackListById(id: number): Observable<IBlackListAllModel> {
    return this.httpClient.get<IBlackListAllModel>(this.apiUrl + '/' + id);
  }

  addBlackList(
    blacklistAddRequestModel: IBlackListAddRequestModel
  ): Observable<IBlackListAllModel> {
    return this.httpClient.post<IBlackListAllModel>(
      this.apiUrl,
      blacklistAddRequestModel
    );
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
  removeApplicant(id: number) {
    return this.httpClient.delete<IBlackListDeleteRequestModel>(
      this.apiUrl + '/' + id
    );
  }
}
