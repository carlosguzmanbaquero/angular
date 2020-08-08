import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule,
        SharedModule
    ]
})
export class HomeModule {

}
