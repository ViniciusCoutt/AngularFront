import { Component } from '@angular/core';

import classification from 'src/app/shared/classification-items';

import { GameListService } from '@shared/services/game-list.service';
import { catchError, EMPTY, filter, first, last, of, skipUntil, take, withLatestFrom } from 'rxjs';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  // providers: [GameListService],
})
export class GameListComponent {
  // games$: Observable<Game[]>;
  games$ = this.gameListServ.games$;
  url: string="";
  platforms: any;
  release_date: string;
  categories: any;
  platSelected: string;
  // error: string;
  // isAnError: boolean;

  constructor(
    private gameListServ: GameListService, private router: Router

    // private modalService: BsModalService
  ) {
  this.router.events
  // filter((event) => event instanceof NavigationEnd)
    .pipe(filter((event) => event instanceof NavigationStart))
    .subscribe((e) => {
      if(window.location.pathname !== "/games") return
      this.url = window.location.search;
      this.gameListServ.getApiData(window.location.search);
    });

    this.platforms = classification.platforms;
    this.categories = classification.genres;

    // this.gameListServ.getApiData();
  }


  onScrollDown():void {
    console.log("Down");
  }


}
