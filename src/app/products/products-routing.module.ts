import { ProductResolverGuard } from './guards/product-resolver.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'novo', component: ProductFormComponent, resolve: { product: ProductResolverGuard } },
  { path: 'editar/:id', component: ProductFormComponent, resolve: { product: ProductResolverGuard } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
