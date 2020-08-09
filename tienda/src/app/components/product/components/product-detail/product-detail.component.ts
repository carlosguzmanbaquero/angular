import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../../core/service/product/products.service';
import { Product } from 'src/app/model/product.model';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
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

}
