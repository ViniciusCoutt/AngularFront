import { Component, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { GameListService } from 'src/app/services/game-list.service';
import classification from 'src/app/shared/classification-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  games: Observable<Game[]>;
  categories: any;
  platforms: any;

  constructor(private gameListServ: GameListService) {
    //this.games = this.gameListServ.getAll();
    // this.platforms = classification.platform;
  }

  ngOnInit(): void {
    this.platforms = classification.platform;
  }

  dropCategoryIsActive: boolean = false;
  dropPlatformIsActive: boolean = false;

  public get() {
    this.gameListServ.get();
  }

  categoryClick() {
    this.dropCategoryIsActive = !this.dropCategoryIsActive;
    this.dropPlatformIsActive = false;
  }

  platformClick() {
    this.dropPlatformIsActive = !this.dropPlatformIsActive;
    this.dropCategoryIsActive = false;
  }
}
