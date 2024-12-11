import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { FormsModule } from '@angular/forms';
import { IngredienteItemComponent } from './IngredientesItem/IngredienteItem.component';
// import { IngredientesListComponent } from './IngredienteList/IngredientesList.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetasComponent,
   IngredienteItemComponent,
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
