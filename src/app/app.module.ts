import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { HomeComponent } from './home/home.component';
import { CuentasPesonalizacionComponent } from './cuentas-pesonalizacion/cuentas-pesonalizacion.component';
import { PopupModificarDatosComponent } from './popup-modificar-datos/popup-modificar-datos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeCardsComponent,
    HomeComponent,
    CuentasPesonalizacionComponent,
    PopupModificarDatosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
