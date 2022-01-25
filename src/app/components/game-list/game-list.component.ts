import { GameListService } from '../../services/game-list.service';
import { Component } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Observable } from 'rxjs';
import classification from 'src/app/shared/classification-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  providers: [GameListService],
})
export class GameListComponent {
  games: Observable<Game[]>;
  url: string;
  platforms: any;
  release_date: string;

  constructor(private gameListServ: GameListService, private router: Router) {
    router.events.subscribe((x) => {
      this.url = window.location.search;
      this.get(this.url);
    });

    this.platforms = classification.platform;
  }

  // ngOnInit(): void {

  //   GameListService.eventt.subscribe(
  //     game => this.games = game
  //   );
  // }

  get(url?: string): void {
    //this.games = EMPTY;
    this.games = this.gameListServ.get(url);
    this.games,
      (error: any) => {
        console.log(error);
      };
  }
}
