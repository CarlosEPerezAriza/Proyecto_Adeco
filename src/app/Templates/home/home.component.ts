import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../Servicios/recetas.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  recetas: Recipe[] = [];
  search: string = '';
  error: string = '';
  constructor(private _recetasService: RecetasService) {
    this._recetasService.getrecipes().subscribe(recetas => {
      console.log("Datos obtenidos desde Firestore:", recetas);
      this.recetas = recetas;})
  }

  searchReceta(){
    this.error = '';
    this._recetasService.getrecipes().subscribe(recetas => {
      this.recetas = recetas
        .filter(recetas => recetas.title.toLowerCase().includes(this.search.toLowerCase()));})
        .add(() => {if (this.recetas.length == 0){
      this.error = 'No se encontraron recetas con esa busqueda';}})

  }
}
