import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'products/:id',
        loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./components/demo/demo.module').then(m => m.DemoModule)
      },
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
