import { AlertModalService } from './../../shared/services/alert-modal.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { OnInit, ChangeDetectorRef, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/products/product';
import { LogoutService } from 'src/app/shared/services/logout.service';

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
    private changeDetectorRefs: ChangeDetectorRef,
    public logoutService: LogoutService,
    public cartService: CartService,
    private modal: AlertModalService
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

  onAddToCartClick(product) {
    const msgSuccess = 'Produto adicionado ao carrinho';
    const msgError = 'Erro ao adicionar produto ao carrinho, tente novamente!';

    console.log('add ao carrinho ID', product.id);
    this.cartService.addOnCart(product);
    this.modal.showAlertSuccess(msgSuccess);
  }

}
