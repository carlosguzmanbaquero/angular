import {
    Component,
    Input,
    Output,
    EventEmitter,
    // OnChanges,
    // SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '../../../../model/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements
    // OnChanges,
    DoCheck,
    OnInit,
    OnDestroy{

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(){
        console.log('constructor');
    }
    /*
    ngOnChanges(changes: SimpleChanges){
        console.log('ngOnChanges');
        console.log(changes);
    }
    */

    ngOnInit(){
        console.log('ngOnInit');
    }

    ngDoCheck(){
        console.log('ngDoCheck');
    }

    ngOnDestroy(){
        console.log('ngOnDestroy');
    }

    agregarCarrito(){
        console.log('producto agregado al carrito');
        this.productClicked.emit(this.product.id);
    }

}
