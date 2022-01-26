import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import classification from 'src/app/shared/classification-items';

import { GameListService } from '../../services/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  providers: [GameListService],
})

export class GameListComponent {
  games$: Observable<Game[]>;
  url: string;
  platforms: any;
  release_date: string;
  categories: any;
  platSelected: string;

  constructor(private gameListServ: GameListService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.router.events.subscribe((x) => {
      this.url = window.location.search;
      this.get(this.url);

      // this.platSelected = this.categories;

      // this.activatedRoute.queryParams.subscribe(params => {
      //   this.platSelected = params['platform'];
      // })
      // switch(this.platSelected){
      //   case "pc": {
      //     this.platSelected = "Windows PC"
      //     break
      //   }
      //   case "browser": {
      //     this.platSelected = "Navegador Web"
      //     break
      //   }
      //   default: {
      //     this.platSelected = "Todas as plataformas"
      //     break
      //   }
      // }

    });

    this.platforms = classification.platforms;
    this.categories = classification.genres;

    // if(this.platSelected == this.platforms.queryParams){
    //   this.platSelected = this.platforms.name
    // }



  }

  get(url?: string): void {
    this.games$ = this.gameListServ.get(url);
    this.games$,
      (error: any) => {
        console.log(error);
      };
  }

  event(msg: string){
    console.log(msg)
    this.platSelected = msg;
  }
}
