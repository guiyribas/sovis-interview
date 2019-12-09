import { AlertModalService } from './../../shared/services/alert-modal.service';
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
    private accountsService: AccountsService,
    private modal: AlertModalService
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

    let msgSuccess = 'Conta criada com sucesso';
    let msgError = 'Erro ao criar conta, tente novamente!';
    if (this.accountForm.value.id) {
      msgSuccess = 'Conta editada com sucesso';
      msgError = 'Erro ao editar conta, tente novamente!';
    }

    this.accountsService.save(this.accountForm.value).subscribe(
      sucess => {
        this.modal.showAlertSuccess(msgSuccess);
        this.router.navigate(['/dashboard/contas']);
      },
      error => {
        this.modal.showAlertDanger(msgError);
        console.log('error', error);
      }
    );
  }

  ngOnCancel() {
    this.submitted = false;
    this.router.navigate(['/dashboard/contas']);
  }

}

