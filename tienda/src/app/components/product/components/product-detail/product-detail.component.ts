import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '@core/services/product/products.service';
import { Product } from '@model/product.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as FileSaver from 'file-saver';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.params
    .pipe(
      switchMap((params: Params) => {
       return this.productsService.getProduct(params.id);
      })
    );
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(product => {
    //  this.product = product;
    });
  }

  createProduct(){
    console.log('createProduct()');
    const newProduct: Product = {
      id: '123',
      title: 'producto nuevo desde detail',
      description: 'prudcto nuevo creado con exito',
      image: 'assets/images/mug.png',
      price: 5000
    };

    this.productsService.createProduct(newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct(){
    console.log('updateProduct()');
    const productoUpdate: Partial<Product> = {
      title: 'producto actualizado2',
    };

    this.productsService.updateProduct('123', productoUpdate)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(){
     this.productsService.deleteProduct('124')
    .subscribe(result => {
      console.log(result);
    });
  }

  getRandomUsers(){
    this.productsService.getRandomUsers()
    .subscribe(users => {
      console.log(users);
    },
      error => {
        console.error(error);
      }
    );
  }

  getFile(){
    this.productsService.getFile()
    .subscribe(content => {
      //console.log(content);
      let blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
      FileSaver.saveAs(blob, 'archivo.txt');
    },
      error => {
        console.error(error);
      }
    );
  }

}
