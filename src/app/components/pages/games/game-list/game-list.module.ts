import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SortingItemsModule } from '@games/sorting-items/sorting-items.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { LoadingSpinnerModule } from './../../../../shared/components/loading-spinner/loading-spinner.module';
import { GameCardModule } from './../game-card/game-card.module';
import { GameListRoutingModule } from './game-list-routing.module';
import { GameListComponent } from './game-list.component';


@NgModule({
  imports: [
    CommonModule,
    GameListRoutingModule,
    InfiniteScrollModule,
    SortingItemsModule,
    LoadingSpinnerModule,
    GameCardModule,

  ],
  declarations: [GameListComponent]
})
export class GameListModule { }
