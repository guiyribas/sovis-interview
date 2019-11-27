import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';


@NgModule({
  declarations: [AccountFormComponent, AccountsListComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountsModule { }
