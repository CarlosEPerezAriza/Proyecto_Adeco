import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-big-input-field',
  templateUrl: './big-input-field.component.html',
  styleUrls: ['./big-input-field.component.css']
})
export class BigInputFieldComponent {
  @Input() placeholder: string = ""
  InputData : string = ""
  @Output() InputDataChange = new EventEmitter<string>()
  updateParent(){
    this.InputDataChange.emit(this.InputData)
  }
}
