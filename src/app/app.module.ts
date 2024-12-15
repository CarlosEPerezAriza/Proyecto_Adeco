import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { HomeComponent } from './home/home.component';
import { CuentasPesonalizacionComponent } from './cuentas-pesonalizacion/cuentas-pesonalizacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCardsComponent,
    HomeComponent,
    CuentasPesonalizacionComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
