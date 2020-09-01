import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
    declarations: [
    LayoutComponent,
    ListComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        SharedModule,
        MaterialModule,
        FormsModule
    ]
})
export class ContactModule {

}
