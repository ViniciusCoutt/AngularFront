import { GameListService } from '../../services/game-list.service';
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})

export class GameListComponent implements OnInit {

  public games: Observable<Game[]>;
  public category: string;
  public platform: string;
  public release_date: string;

  constructor(
    private gameListServ: GameListService
    ) { }

  ngOnInit(): void {
    this.getAllGames();
    //this.games = this.gameListServ.getAll();
  }

  getAllGames(): void {
    this.games = this.gameListServ.getAll();
    this.games, (error: any) => {
      console.log(error)
    }
    /*this.gameListServ.getAll().subscribe(
      (games: Game[]) => {
        this.games = games;
      },
      (error: any) => {
        console.log(error);
      }
    );*/
  }

  SortBy(category?: string, platform?: string, release_date?: string) : void {
    this.games = this.gameListServ.sortBy(category, platform, release_date);
    this.games, (error: any) => {
      console.log(error)
    }
  }


}
