import { Component } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  Recipes: Recipe[] = [
    new Recipe('Sopa casera', '../../assets/sopa.jpg'),
    new Recipe('Tortilla de patatas', '../../assets/tortilla-patatas.jpg'),
    new Recipe('Paella', '../../assets/paella.jpg'),
    new Recipe('Bocata de jamón', '../../assets/bocata-jamon.jpg'),
    new Recipe('Lentejas', '../../assets/lentejas.jpg'),
    new Recipe('Cocido madrileño', '../../assets/cocido-madrileno.jpg'),
  ];
}
