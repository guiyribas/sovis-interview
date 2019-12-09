import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/accounts/account';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { take, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { AccountsService } from 'src/app/shared/services/accounts.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
  preserveWhitespaces: true
})
export class AccountsListComponent implements OnInit {

  allAccounts: Account[];

  constructor(
    private accountsService: AccountsService,
    private changeDetectorRefs: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertModalService
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.accountsService.list().subscribe((res) => {
      this.allAccounts = res;
      this.changeDetectorRefs.detectChanges();
    }
    );
  }

  onEdit(account) {
    this.router.navigate(['editar', account], { relativeTo: this.route });
  }

  onDelete(account) {
    const result$ = this.alertService.showConfirm('Exclusão de conta', 'Tem certeza que deseja remover essa conta?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.accountsService.remove(account) : EMPTY)
      )
      .subscribe(
        success => {
          this.onRefresh();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover conta. Tente novamente mais tarde.');
        }
      );

  }

}
