import { AccountsService } from './../../core/services/accounts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss'],
  preserveWhitespaces: true
})
export class AccountFormComponent {

  accountForm: FormGroup;
  submitted = false;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private accountsService: AccountsService
  ) {

    const account = this.route.snapshot.data.account;

    this.accountForm = this.fb.group({
      id: [account.id, Validators.required],
      email: [account.email, Validators.required],
      password: [account.password, Validators.required]
    });

    console.log(this.accountForm);
  }

  ngOnSubmit() {
    this.submitted = true;
    this.accountsService.save(this.accountForm.value).subscribe(
      sucess => {
        this.router.navigate(['/dashboard/contas']);
      },
      error => {
        console.log('error', error);
      }
    );
  }

  ngOnCancel() {
    this.submitted = false;
    this.router.navigate(['/dashboard/contas']);
  }

}

