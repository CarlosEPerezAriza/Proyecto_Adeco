import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.css']
})
export class HomeCardsComponent {
  @Input() imgSrc: string = "../../assets/sopa.jpg"
  @Input() title: string = "Sopa casera"

}
