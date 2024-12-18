import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-modificar-datos',
  templateUrl: './popup-modificar-datos.component.html',
  styleUrls: ['./popup-modificar-datos.component.css']
})
export class PopupModificarDatosComponent {
  @Input() popupTitle = ""
  ValueToUpdate: string = "";

  updateField(){}

}
