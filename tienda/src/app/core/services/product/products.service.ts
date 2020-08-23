import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '@model/product.model';
import { environment } from '@environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import * as Sentry from '@sentry/browser';

interface UserP{
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  /*
  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];
  */

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>(`${environment.url_api}/products/`)
    .pipe(
      catchError(this.handleError),
    );
  }

  getProduct(id: string){
    return this.http.get<Product>(`${environment.url_api}/products/${id}`)
    .pipe(
      catchError(this.handleError),
    );
  }

  createProduct(product: Product){
    return this.http.post(`${environment.url_api}/products/`, product)
    .pipe(
      catchError(this.handleError),
    );
  }

  updateProduct(id: string, changes: Partial<Product>){
    return this.http.put(`${environment.url_api}/products/${id}`, changes)
    .pipe(
      catchError(this.handleError),
    );
  }

  deleteProduct(id: string){
    return this.http.delete(`${environment.url_api}/products/${id}`)
    .pipe(
      catchError(this.handleError),
    );
  }

  // Tipado en peticiones
  getRandomUsers(): Observable<UserP[]>{
    return this.http.get('https://raandomuser.me/api/?results=2')
    .pipe(
      retry(2),
      catchError(this.handleError),
      map((respone: any) => respone.results as UserP[])
    );
  }

  getFile(){
    return this.http.get('assets/files/prueba.txt', {responseType: 'text'});
  }

  private handleError(error: HttpErrorResponse){
    console.log(error);
    Sentry.captureException(error);
    return throwError('Error al comunicarse con el webservice');
  }
}
