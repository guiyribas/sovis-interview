import { ProductsService } from 'src/app/shared/services/products.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverGuard implements Resolve<Product> {

  constructor(private productsService: ProductsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    if (route.params && route.params.id) {
      console.log(route.params.id);
      return this.productsService.loadByID(route.params.id);
    }

    return of({
      id: null,
      name: null,
      price: null,
      purchaseQuantity: null,
      size: null
    });
  }
}
