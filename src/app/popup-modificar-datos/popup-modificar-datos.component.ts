import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-modificar-datos',
  templateUrl: './popup-modificar-datos.component.html',
  styleUrls: ['./popup-modificar-datos.component.css']
})
export class PopupModificarDatosComponent {
  @Input() popupTitle = ""
  ValueToUpdate: string = "";
  @Output() sendNewData = new EventEmitter<string>();
  updateData(value: string)
  {
    this.ValueToUpdate = value;
  }
  updateField()
  {
    this.sendNewData.emit(this.ValueToUpdate)
  }

}
