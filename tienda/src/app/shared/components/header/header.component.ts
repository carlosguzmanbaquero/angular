import { Component, OnInit, HostListener } from '@angular/core';
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

  installEvent = null;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event){
    console.log(event);
    event.preventDefault();
    this.installEvent = event;
  }

  installApp(){
    if (this.installEvent){
      this.installEvent.prompt();
      this.installEvent.userChoise
      .then(value => {
        console.log(value);
      });
    }else{

    }
  }

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
