import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getemail() {
    return localStorage.getItem('email');
  }

  isAuthenticated(): boolean {
    const email = localStorage.getItem('email');

    if (email) {
      console.log('dentro', email);
      return true;
    } else {
      console.log('fora');
      return false;
    }
  }

}
