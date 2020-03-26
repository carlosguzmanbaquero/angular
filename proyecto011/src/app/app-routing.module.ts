import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JuegodadosComponent } from './juegodados/juegodados.component';
import { AcercadeComponent } from './acercade/acercade.component';

const routes: Routes = [
  {
    path: '',
    component: JuegodadosComponent
  },
  {
    path: 'juegodados',
    component: JuegodadosComponent
  },
  {
    path: 'acercade',
    component: AcercadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
