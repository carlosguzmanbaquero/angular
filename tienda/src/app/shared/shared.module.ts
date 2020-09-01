import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DeleteRepeatsPipe } from './pipes/delete-repeats/delete-repeats.pipe';
import { RepeatNumberPipe } from './pipes/repeat-number/repeat-number.pipe';
import { GroupProductsPipe } from './pipes/group-products/group-products.pipe';
import { QuicklinkModule } from 'ngx-quicklink';
import { FibonacciPipe } from './pipes/fibonacci/fibonacci.pipe';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    DeleteRepeatsPipe,
    RepeatNumberPipe,
    GroupProductsPipe,
    FibonacciPipe
  ],
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    DeleteRepeatsPipe,
    RepeatNumberPipe,
    GroupProductsPipe,
    FibonacciPipe
  ]
})
export class SharedModule { }
