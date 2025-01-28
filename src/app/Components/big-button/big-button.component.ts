import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.css']
})
export class BigButtonComponent {
  @Input() buttonText: string = 'No text received';
  @Output() clickEvent = new EventEmitter();
  clicked(){
    this.clickEvent.emit()
  }
}
