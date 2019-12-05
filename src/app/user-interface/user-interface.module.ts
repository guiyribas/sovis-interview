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

@NgModule({
  declarations: [HomePageComponent, HeaderUserComponent, CartComponent, CartEmptyComponent, CartItemsComponent, CartSummaryComponent],
  imports: [
    CommonModule,
    UserInterfaceRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserInterfaceModule { }
