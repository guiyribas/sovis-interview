import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  totalPrice = 0;
  cartItems;
  totalNumberOfItems = 0;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertModalService
  ) { }

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('itemsLocalStorageCart'));
    if (this.cartItems) {
      for (let i = 0; this.cartItems[i]; i++) {
        let currentItemPrice;
        currentItemPrice = parseFloat(this.cartItems[i].price);
        this.totalPrice = this.totalPrice + currentItemPrice;
        this.totalNumberOfItems++;
      }
    }
    // this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onCheckoutClick() {
    this.router.navigate(['/checkout']);
  }

  onDumpCartClick() {
    const result$ = this.alertService.showConfirm('Esvaziar carrinho', 'Tem certeza que deseja remover todos os produtos do carrinho?');
    result$.asObservable()
      .subscribe(
        success => {
          localStorage.removeItem('itemsLocalStorageCart');
          location.reload();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao esvaziar carrinho. Tente novamente mais tarde.');
        }
      );
  }
}
