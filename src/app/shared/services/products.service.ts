import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { take, catchError, map } from 'rxjs/operators';
import { Product } from 'src/app/products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private API_URL_PRODUCTS = `${environment.API}products`;
  private TESTE = `${environment.API}cart`;

  constructor(private http: HttpClient) { }

  // Lista todos os produtos (produtos nao estao categorizados)
  list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL_PRODUCTS);
  }

  // get
  loadByID(id) {
    console.log(this.API_URL_PRODUCTS + `/${id}`);
    return this.http.get<Product>(this.API_URL_PRODUCTS + `/${id}`).pipe(take(1));
  }

  // Se possui ID, edita os dados (put). Se não, cria um novo (post)
  save(record: Product) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  // put
  private update(record: Product) {
    return this.http.put(this.API_URL_PRODUCTS + `/${record.id}`, record).pipe(take(1));
  }

  // post
  private create(record: Product) {
    return this.http.post(this.API_URL_PRODUCTS, record).pipe(take(1));
  }

  // delete
  remove(id) {
    return this.http.delete(this.API_URL_PRODUCTS + `/${id}`).pipe(
      map((response: Response) => response,
        catchError((response: Response) => throwError(response))
      ),
      take(1));
  }
}
