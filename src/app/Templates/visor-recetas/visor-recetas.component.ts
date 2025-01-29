import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecetasService } from 'src/app/Servicios/recetas.service';

@Component({
  selector: 'app-visor-recetas',
  templateUrl: './visor-recetas.component.html',
  styleUrls: ['./visor-recetas.component.css'],
})
export class VisorRecetasComponent {
  receta?: Recipe;
  pageIndex: number = -1;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recetaService: RecetasService
  ) {
    this.recetaService
      .getRecipeById(this.route.snapshot.paramMap.get('id')!)
      .subscribe((receta) => {
        this.receta = receta;
      });
  }
  editarReceta() {
    this.router.navigate(['/crearreceta', this.receta?.id]);
  }
  siguiente(){
    this.pageIndex++
  }
  anterior(){
    this.pageIndex--
  }
  volver(){
    this.router.navigate(['/home']);
  }
}
