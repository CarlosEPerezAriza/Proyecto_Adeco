
import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-creador-pasos',
  templateUrl: './creador-pasos.component.html',
  styleUrls: ['./creador-pasos.component.css'],
})
export class CreadorPasosComponent implements AfterViewInit {
  @Input() receta!: Recipe;
  @Input() paso: {
    image: string;
    name: string;
    description: string;
    extrainfo?: string;
  } =
  {
    image: 'assets/placeholder.jpg',
    name: '',
    description: '',
  }
  ngAfterViewInit(): void {
      if (this.Index != -1)
        {this.paso = this.receta.instructions[this.Index]}
      else
      { this.paso = {
        image: 'assets/placeholder.jpg',
        name: '',
        description: '',
      };}
  }
  @Input() Index = 0;

  @Output() pasoCreado = new EventEmitter();
  anadirPaso()
  {
    this.receta.instructions.push(this.paso);
    this.resetEditor();
  }
  editarPaso() {
    this.receta.instructions[this.Index] = this.paso;
    this.resetEditor();
  }
  eliminarPaso() {
    this.receta.instructions.splice(this.Index, 1);
    this.resetEditor();
  }
  resetEditor(){
    this.pasoCreado.emit()
}
}
