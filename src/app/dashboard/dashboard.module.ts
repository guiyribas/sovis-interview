import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidemenuItemComponent } from './layout/sidemenu-item/sidemenu-item.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, SidemenuItemComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
