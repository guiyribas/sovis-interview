import { LogoutService } from 'src/app/shared/services/logout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {

  loggedInUser = localStorage.getItem('email');
  isLogged = false;

  constructor(
    public logoutService: LogoutService
  ) { }

  ngOnInit() {
    if (this.loggedInUser != null) {
      this.isLogged = true;
    }
  }

  onLogoutClick() {
    this.logoutService.logout();
    location.reload();
  }

}
