import { Recipe } from './../../models/recipe.model';
import { RecetasService } from 'src/app/Servicios/recetas.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-receta',
  templateUrl: './crear-receta.component.html',
  styleUrls: ['./crear-receta.component.css'],
})
export class CrearRecetaComponent {
  receta: Recipe = {id:'', title: 'Nueva receta', image: '../../../assets/placeholder.jpg', description:'Descripcion receta', ingredients: [], instructions: []};
  cambiarImagenPopupVisible: boolean = false;
  editarPaso : boolean = false;
  id: string = '';
  pasoIndex : number = -1;
  nameInput: string = '';
  quantityInput: number = 0;
  measureInput: string = '';
  constructor(private _recetasService:RecetasService, private _route:ActivatedRoute, private _router:Router) {
  this.id = this._route.snapshot.paramMap.get('id') || '';
  if(this.id){
    console.log(this._recetasService.getRecipeById(this.id))
    this._recetasService.getRecipeById(this.id).subscribe(receta => this.receta = receta)
    }
  }

  crearReceta(){
    this._recetasService.addrecipe(this.receta);
    this._router.navigate(['home']);
  }
  actualizarReceta(){
    this._recetasService.updaterecipe(this.id, this.receta);
    this._router.navigate(['home']);
  }
  changeImage(){
    this.cambiarImagenPopupVisible = true;
  }
  updateImage(event:string)
  {
    this.cambiarImagenPopupVisible = false;
    this.receta.image = event;
  }
  eliminarReceta(){
    if (prompt("Escribe 'Eliminar Receta' para confirmar") === 'Eliminar Receta'){
    this._recetasService.deleterecipe(this.id);
    console.log('Returning home')
    this._router.navigate(['home'])
    }
    else
    {
      alert("Eliminacion cancelada")
    }
  }
  editarpaso(index : number)
  {
    this.pasoIndex = index;
    this.editarPaso = true
  }
  cerrarEditorPaso(){
    this.editarPaso=false;
  }
  addIngredient(){
    this.receta.ingredients.push({name: this.nameInput, quantity: this.quantityInput, measureUnit: this.measureInput});
    this.nameInput = '';
    this.quantityInput = 0;
    this.measureInput = '';
  }
  removeIngredient(index: number){
    this.receta.ingredients.splice(index, 1);
  }
}
