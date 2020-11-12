import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
// tslint:disable-next-line:import-spacing
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
   baseUrl = 'http://localhost:8080/restapi-jersey';
  constructor(private http: HttpClient) {}
  getusers(): Observable<User[]> {
    const response = this.http.get<User[]>(this.baseUrl + '/api/user/index');

    return response;
  }
}
