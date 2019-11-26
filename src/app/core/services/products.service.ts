import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private API_URL_PRODUCTS = `${environment.API}products`;

  constructor(private http: HttpClient) { }

  // Lista todos os produtos (produtos nao estao categorizados)
  list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL_PRODUCTS);
  }
}
