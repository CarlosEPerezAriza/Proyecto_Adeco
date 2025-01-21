import { RecetasService } from 'src/app/Servicios/recetas.service';
import { Recipe } from './../../recipe';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-receta',
  templateUrl: './crear-receta.component.html',
  styleUrls: ['./crear-receta.component.css'],
})
export class CrearRecetaComponent implements OnInit, OnDestroy {
  receta!: Recipe;
  cambiarImagenPopupVisible: boolean = false;
  constructor(private _recetasService:RecetasService) {}
  ngOnInit(): void {
    this.receta = this._recetasService.getRecetaTemplate()
  }
  ngOnDestroy() {
    this._recetasService.updateTemplate(this.receta)
  }
  crearReceta(){
    this._recetasService.createReceta(this.receta);
    this.receta = this._recetasService.getRecetaTemplate();
  }
  changeImage(){
    this.cambiarImagenPopupVisible = true;
  }
  updateImage(event:string)
  {
    this.cambiarImagenPopupVisible = false;
    this.receta.image = event;
  }
}
