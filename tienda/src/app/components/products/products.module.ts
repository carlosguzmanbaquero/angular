import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProductModule } from '../product/product.module';

@NgModule({
    declarations: [
        ProductsComponent,
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule,
        ProductModule
    ]
})
export class ProductsModule {

}
