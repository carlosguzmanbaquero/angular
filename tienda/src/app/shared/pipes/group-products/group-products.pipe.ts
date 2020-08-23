import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@model/product.model';

@Pipe({
  name: 'groupProducts'
})
export class GroupProductsPipe implements PipeTransform {

  groupedProducts: any[] = [];

  transform(value: Product[]): any {
    value.forEach(product => {
      if (this.groupedProducts.length === 0) {
        this.groupedProducts.push(Object.assign(product, {quantity: 1, subTotal: product.price}));
      } else {
        const repeatedProduct = this.groupedProducts.findIndex(p => p.id === product.id);
        if (repeatedProduct === -1) {
          this.groupedProducts.push(Object.assign(product, {quantity: 1, subTotal: product.price}));
        } else {
          this.groupedProducts[repeatedProduct].quantity += 1;
          this.groupedProducts[repeatedProduct].subTotal += product.price;
        }
      }
    });

    return this.groupedProducts;
  }
}