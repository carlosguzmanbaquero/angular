import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { DemoComponent } from './demo.component';
import { FormsModule } from '@angular/forms';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
    declarations: [
        DemoComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        DemoRoutingModule
    ]
})
export class DemoModule {

}