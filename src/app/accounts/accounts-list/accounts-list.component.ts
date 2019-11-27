import { Router, ActivatedRoute } from '@angular/router';
import { AccountsService } from './../../core/services/accounts.service';
import { Account } from 'src/app/accounts/account';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

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
    private route: ActivatedRoute
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
    this.accountsService.remove(account).subscribe(
      (response) => {
        this.onRefresh();
      }
    );
  }

}
