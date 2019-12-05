import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './login/login.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserInterfaceModule } from './user-interface/user-interface.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserInterfaceModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
