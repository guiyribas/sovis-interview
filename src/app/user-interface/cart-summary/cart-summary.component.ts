import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  totalPrice = 0;
  cartItems;
  totalNumberOfItems = 0;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('itemsLocalStorageCart'));
    for (let i = 0; this.cartItems[i]; i++) {
      let currentItemPrice;
      currentItemPrice = parseFloat(this.cartItems[i].price);
      this.totalPrice = this.totalPrice + currentItemPrice;
      this.totalNumberOfItems++;
    }
  }

  onCheckoutClick() {
    this.router.navigate(['/checkout']);
  }

  onDumpCartClick() {
    localStorage.removeItem('itemsLocalStorageCart');
  }

}
