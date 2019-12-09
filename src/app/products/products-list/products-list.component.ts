import { ProductsService } from 'src/app/shared/services/products.service';
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Product } from '../product';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { take, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  preserveWhitespaces: true
})
export class ProductsListComponent implements OnInit {

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal', { static: false }) deleteModal;

  allProducts: Product[];

  constructor(
    private productsService: ProductsService,
    private changeDetectorRefs: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService,
    private alertService: AlertModalService
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.productsService.list().subscribe((res) => {
      this.allProducts = res;
      this.changeDetectorRefs.detectChanges();
    }
    );
  }

  onEdit(product) {
    this.router.navigate(['editar', product], { relativeTo: this.route });
  }

  onDelete(product) {
    const result$ = this.alertService.showConfirm('Exclusão de produto', 'Tem certeza que deseja remover esse produto?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.productsService.remove(product) : EMPTY)
      )
      .subscribe(
        success => {
          this.onRefresh();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover produto. Tente novamente mais tarde.');
        }
      );
  }

}
