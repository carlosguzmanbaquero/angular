import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/product/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts().
    subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id)
   .subscribe(result => {
     console.log(result);
     //this.fetchProducts();
     if (result) {
      const index = this.products.findIndex(product => product.id === id);
      this.products.splice(index, 1);
      this.products = [...this.products];
    }
   });
 }

}
