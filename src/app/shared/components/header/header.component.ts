import { Component, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { GameListService } from '@app/shared/services/game-list.service';
import classification from 'src/app/shared/classification-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  categories: any[];
  platforms: any[];
  isPlatformCollapsed: boolean = false;
  isCategoryCollapsed: boolean = false;

  constructor() {
    this.platforms = classification.platforms;
    this.categories = classification.genres;

  }

  ngOnInit(): void {

  }

  // private get() {
  //   this.gameListServ.getApiData();
  // }

  categoryClick() {
    this.isCategoryCollapsed = !this.isCategoryCollapsed;
    this.isPlatformCollapsed = false;
  }

  platformClick() {
    this.isPlatformCollapsed = !this.isPlatformCollapsed;
    this.isCategoryCollapsed = false;
  }

}
