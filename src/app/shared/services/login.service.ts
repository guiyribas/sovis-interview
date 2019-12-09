import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private API_URL_LOGIN = `${environment.API}login`;

  constructor(private http: HttpClient) { }

  // LOGIN
  public login(record) {
    return this.http.post(this.API_URL_LOGIN, record).pipe(take(1));
  }
}
