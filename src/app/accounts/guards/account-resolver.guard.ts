import { AccountsService } from './../../core/services/accounts.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Account } from '../account';

@Injectable({
  providedIn: 'root'
})
export class AccountResolverGuard implements Resolve<Account> {

  constructor(private accountService: AccountsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Account> {
    if (route.params && route.params.id) {
      console.log(route.params.id);
      return this.accountService.loadByID(route.params.id);
    }

    return of({
      id: null,
      email: null,
      password: null
    });
  }
}
