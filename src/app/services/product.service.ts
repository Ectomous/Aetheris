import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.http = inject(HttpClient);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  createProduct(newProduct: Product) {
    return this.http.post<Product[]>(
      'http://localhost:3000/products',
      newProduct
    );
  }
}
