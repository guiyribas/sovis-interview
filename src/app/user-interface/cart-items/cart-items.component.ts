import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {

  quantity: number;
  totalPrice = 0;
  cartItems;

  constructor() { }

  ngOnInit() {
    this.quantity = 1;
    this.totalPriceFunc();
    this.cartItems = JSON.parse(localStorage.getItem('itemsLocalStorageCart'));
    console.log('VEEEM NENEM', this.cartItems);
  }

  ngOnPlusButtonClick() {
    this.quantity = this.quantity + 1;
    this.totalPriceFunc();
    console.log('quant', this.quantity);
  }

  ngOnMinusButtonClick() {
    this.quantity = this.quantity - 1;
    if (this.quantity < 0) {
      this.quantity = 0;
    }
    this.totalPriceFunc();
    console.log('quant', this.quantity);
  }

  totalPriceFunc() {
    // this.totalPrice = this.quantity * 100;
  }

}
