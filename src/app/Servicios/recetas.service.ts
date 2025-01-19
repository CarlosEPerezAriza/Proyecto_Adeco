import { Injectable } from '@angular/core';
import { Recipe } from '../recipe';

@Injectable({
  providedIn: 'root',
})
export class RecetasService {
  Recipes: Recipe[] = [
    new Recipe('Sopa casera', '../../assets/sopa.jpg'),
    new Recipe('Tortilla de patatas', '../../assets/tortilla-patatas.jpg'),
    new Recipe('Paella', '../../assets/paella.jpg'),
    new Recipe('Bocata de jamón', '../../assets/bocata-jamon.jpg'),
    new Recipe('Lentejas', '../../assets/lentejas.jpg'),
    new Recipe('Cocido madrileño', '../../assets/cocido-madrileno.jpg'),
  ];
  constructor() {}
  getRecetas(){
    return this.Recipes;
  }
  searchRecetas(search: string){
    return this.Recipes.filter(x => x.title.toLowerCase().includes(search.toLowerCase()));
  }
}
