import { ProductsService } from './../../core/services/products.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Product } from '../product';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  preserveWhitespaces: true
})
export class ProductsListComponent implements OnInit {

  allProducts: Product[];

  constructor(
    private productsService: ProductsService,
    private changeDetectorRefs: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
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
    this.productsService.remove(product).subscribe(
      (response) => {
        this.onRefresh();
      }
    );
  }

}
