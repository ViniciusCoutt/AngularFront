import { Component } from '@angular/core';
import { GameListService } from '@shared/services/game-list.service';
import classification from 'src/app/shared/classification-items';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {
  games$ = this.gameListServ.games$;
  platforms: any;
  release_date: string;
  categories: any;
  platSelected: string;


  constructor(
    private gameListServ: GameListService
  ) {
    this.platforms = classification.platforms;
    this.categories = classification.genres;
  }

  // onScrollDown():void {
  //   console.log("Down");
  // }
}
