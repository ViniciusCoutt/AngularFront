import { Component } from '@angular/core';
import { Game } from '@app/models/game';
import { GameListService } from '@shared/services/game-list.service';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],

})
export class GameListComponent {

  games$ = this.gameListServ.games$;


  constructor(
    private gameListServ: GameListService
  ) {}


}
