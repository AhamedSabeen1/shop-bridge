import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../site-layout/category';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) { }

  createProduct(product:any): Observable<Product>{
    const baseUrl = "http://localhost:3000/products";
    return this.http.post<Product>(baseUrl, product);
  }

  viewProduct(): Observable<Product>{
    const baseUrl = "http://localhost:3000/products/";
    return this.http.get<Product>(baseUrl);
  }
  viewIndividualProduct(productId:any): Observable<Product>{
    const baseUrl = "http://localhost:3000/products/"+productId;
    return this.http.get<Product>(baseUrl);
  }

  updateProduct(productId:any, product:any): Observable<Product>{
    const baseUrl = "http://localhost:3000/products/"+productId;
    return this.http.put<Product>(baseUrl, product);
  }

  deleteProduct(productId:any): Observable<Product>{
    const baseUrl = "http://localhost:3000/products/"+productId;
    return this.http.delete<Product>(baseUrl);
  }

  searchCategoryProduct(categoryId:any): Observable<Product>{
    const baseUrl = "http://localhost:3000/products?category_id="+categoryId;
    return this.http.get<Product>(baseUrl);
  }

  searchDateProduct(dateParam:any): Observable<Product>{
    const baseUrl = "http://localhost:3000/products/date="+dateParam;
    return this.http.get<Product>(baseUrl);
  }

  getCategory(){
    const categoryUrl = "http://localhost:3000/categories";
    return this.http.get<Category>(categoryUrl);
  }
}
