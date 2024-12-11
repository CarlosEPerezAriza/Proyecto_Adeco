import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingrediente-item',
  templateUrl: './IngredienteItem.component.html',
 //  styleUrls: ['./ingredientes.component.css']
})
export class IngredienteItemComponent {
  @Input() ingrediente!: { nombre: string; };
  @Output() addIngrediente = new EventEmitter<string>();
  @Output() removeIngrediente = new EventEmitter<string>();

  agregarIngrediente() {
    this.addIngrediente.emit(this.ingrediente.nombre);
  }

  eliminarIngrediente() {
    this.removeIngrediente.emit(this.ingrediente.nombre);
  }
}