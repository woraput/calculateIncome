import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CloudSyncProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CloudSyncProvider {
  private readonly baseUrl: string = "https://localhost:44351/api/Money"; // dev url

  constructor(public http: HttpClient) {
    console.log('Hello CloudSyncProvider Provider');
  }

  public GetHistory(): Observable<any> {
    return this.http.get<History[]>(this.baseUrl + '/GetHistory');
  }

  public GetLastHistory(): Observable<any> {
    return this.http.get<History[]>(this.baseUrl + '/GetLastHistory');
  }
}
