import { LogoutService } from './../../core/services/logout.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private logoutService: LogoutService) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      // this.logoutService.logout();
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
