import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
    declarations: [
        LayoutComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        LayoutRoutingModule,
        AppRoutingModule,
    ]
})
export class LayoutModule {

}