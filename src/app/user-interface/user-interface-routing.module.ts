import { ThanksComponent } from './thanks/thanks.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckOutAuthGuard } from '../shared/guards/check-out.guard';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'meu-carrinho', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [CheckOutAuthGuard] },
  { path: 'obrigado-pela-preferencia', component: ThanksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserInterfaceRoutingModule { }
