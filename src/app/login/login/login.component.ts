import { LoginService } from 'src/app/shared/services/login.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn$: Observable<boolean> | boolean;
  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
    console.log('RETURN URL', this.route.snapshot);
  }

  onLoginClick() {
    this.loginService.login(this.loginForm.value).subscribe(
      sucess => {
        console.log('sucess', sucess);
        localStorage.setItem('email', this.loginForm.value.email);
        // localStorage.setItem('token', sucess.token);
        // this.router.navigate(['/']);
        // login successful so redirect to return url
        this.router.navigateByUrl(this.returnUrl);
        console.log('this.re yurl', this.returnUrl);
        // window.location.href = '/';
      },
      error => {
        console.log('error', error);
      }
    );
  }
}
