import { LoginService } from './../../core/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | boolean;
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', Validators.required]
    });
  }

  onLoginClick() {
    this.loginService.login(this.loginForm.value).subscribe(
      sucess => {
        console.log('sucess', sucess);
        localStorage.setItem('email', this.loginForm.value.email);
        // localStorage.setItem('token', sucess.token);
        // this.router.navigate(['/']);
        window.location.href = '/';
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
