import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Product } from 'src/app/products/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private API_URL_CART = `${environment.API}cart`;

  constructor(
    private http: HttpClient
  ) { }

  // post
  addOnCart(record: Product) {
    let itemsLocalStorageCart = new Array();

    if (localStorage.hasOwnProperty('itemsLocalStorageCart')) {
      itemsLocalStorageCart = JSON.parse(localStorage.getItem('itemsLocalStorageCart'));
    }

    itemsLocalStorageCart.push({
      id: record.id,
      name: record.name,
      price: record.price,
      purchaseQuantity: 1
    });

    localStorage.setItem('itemsLocalStorageCart', JSON.stringify(itemsLocalStorageCart));

    console.log('array items local storage', itemsLocalStorageCart);

    // return this.http.post(this.API_URL_CART, record).pipe(take(1));
  }

}
