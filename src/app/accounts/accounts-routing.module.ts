import { AccountResolverGuard } from './guards/account-resolver.guard';
import { AccountFormComponent } from './account-form/account-form.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AccountsListComponent },
  { path: 'novo', component: AccountFormComponent, resolve: { account: AccountResolverGuard } },
  { path: 'editar/:id', component: AccountFormComponent, resolve: { account: AccountResolverGuard } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
