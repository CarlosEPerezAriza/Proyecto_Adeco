import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecetasService } from '../Servicios/recetas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recetas: Recipe[] = [];
  search: string = '';
  error: string = '';
  constructor(private _recetasService: RecetasService) { }
  ngOnInit(): void {
      this.recetas = this._recetasService.getRecetas();
  }
  searchReceta(){
    this.error = '';
    this.recetas = this._recetasService.searchRecetas(this.search);
    if (this.recetas.length == 0){
      this.error = 'No se encontraron recetas con esa busqueda';
  }
}
}
