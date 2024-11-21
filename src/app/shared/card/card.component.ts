import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() name = ''
  @Input() image = ''
  @Input() status = ''
  @Input() gender = ''
  @Input() species = ''
}
