import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInterfaceRoutingModule } from './user-interface-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderUserComponent } from './header-user/header-user.component';
import { CartComponent } from './cart/cart.component';
import { CartEmptyComponent } from './cart-empty/cart-empty.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { ThanksComponent } from './thanks/thanks.component';

@NgModule({
  declarations: [HomePageComponent, HeaderUserComponent, CartComponent, CartEmptyComponent, CartItemsComponent, CartSummaryComponent, CheckoutComponent, PaymentMethodsComponent, ThanksComponent],
  imports: [
    CommonModule,
    UserInterfaceRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserInterfaceModule { }
