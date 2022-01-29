import { Component, Input, OnInit } from '@angular/core';
import { Game } from '@app/models/game';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input() game: Game;

  constructor() { }

}
