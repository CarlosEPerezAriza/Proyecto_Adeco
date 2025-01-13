import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { FormsModule } from '@angular/forms';
import { IngredienteItemComponent } from './IngredientesItem/IngredienteItem.component';
import { NombreComponenteComponent } from './nombre-componente/nombre-componente.component';
import { IngredienteListComponent } from './ingrediente-list/ingrediente-list.component';
// import { IngredientesListComponent } from './IngredienteList/IngredientesList.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
   IngredienteItemComponent,
   NombreComponenteComponent,
   IngredienteListComponent,
   // IngredientesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
