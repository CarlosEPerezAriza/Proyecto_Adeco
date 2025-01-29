import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-big-password-field',
  templateUrl: './big-password-field.component.html',
  styleUrls: ['./big-password-field.component.css']
})
export class BigPasswordFieldComponent {
  @Input() placeholder: string = ""
  @Input() InputData : string = ""
  @Output() InputDataChange = new EventEmitter<string>()
  updateParent(){
    this.InputDataChange.emit(this.InputData)
  }
}
