import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidemenuItemComponent } from './layout/sidemenu-item/sidemenu-item.component';
import { SidemenuComponent } from './layout/sidemenu/sidemenu.component';


@NgModule({
  declarations: [LayoutComponent, FooterComponent, HeaderComponent, SidemenuItemComponent, SidemenuComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
