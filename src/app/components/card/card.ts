import { Component, Input } from '@angular/core';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() film!: Film;
}
