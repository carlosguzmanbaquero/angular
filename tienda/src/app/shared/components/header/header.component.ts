import { Component, OnInit } from '@angular/core';
import { CartService } from '@core/services/cart/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  numItems$: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
    // cuenta la cantidad de productos en el carro
    /*
    this.cartService.cart$.subscribe(products => {
      if (products){
        this.numItems = products.length;
      }
    });

   this.cartService.cart$
   .pipe(
     map(products => products.length)
   ).subscribe(total => {
    this.numItems = total;
   });
   */

  this.numItems$ = this.cartService.cart$
    .pipe(
      map((products: any) => products.length)
    );
  }

  ngOnInit(): void {
  }

}
