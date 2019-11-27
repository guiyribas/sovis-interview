import { ProductsService } from './../../core/services/products.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/products/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  links: boolean;
  allProducts: Product[];

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetectorRefs: ChangeDetectorRef
  ) {
    this.links = false;
  }

  ngOnInit() {
    this.onRefresh();
    console.log('teste on init', this.productsService.list());
  }

  onRefresh() {
    this.productsService.list().subscribe((res) => {
      console.log('recebo aqui', res);
      console.log('só o nome', res[0].name);
      this.allProducts = res;
      console.log('ALL PRODUCTS', this.allProducts);
      this.changeDetectorRefs.detectChanges();
    }
    );
  }

  onMenuClick() {
    this.links = !this.links;
  }

  onAddToCartClick(id) {
    console.log('add ao carrinho ID', id);
  }

}
