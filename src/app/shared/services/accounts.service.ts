import { Account } from 'src/app/accounts/account';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { take, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private API_URL_ACCOUNTS = `${environment.API}accounts`;

  constructor(private http: HttpClient) { }

  // Lista todos os produtos (produtos nao estao categorizados)
  list(): Observable<Account[]> {
    return this.http.get<Account[]>(this.API_URL_ACCOUNTS);
  }

  // get
  loadByID(id) {
    console.log(this.API_URL_ACCOUNTS + `/${id}`);
    return this.http.get<Account>(this.API_URL_ACCOUNTS + `/${id}`).pipe(take(1));
  }

  // Se possui ID, edita os dados (put). Se não, cria um novo (post)
  save(record: Account) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  // put
  private update(record: Account) {
    return this.http.put(this.API_URL_ACCOUNTS + `/${record.id}`, record).pipe(take(1));
  }

  // post
  private create(record: Account) {
    return this.http.post(this.API_URL_ACCOUNTS, record).pipe(take(1));
  }

  // delete
  remove(id) {
    return this.http.delete(this.API_URL_ACCOUNTS + `/${id}`).pipe(
      map((response: Response) => response,
        catchError((response: Response) => throwError(response))
      ),
      take(1));
  }
}
