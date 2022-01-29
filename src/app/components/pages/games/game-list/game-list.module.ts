import { GameCardModule } from './../game-card/game-card.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SortingItemsModule } from '@games/sorting-items/sorting-items.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { LoadingSpinnerModule } from './../../../../shared/components/loading-spinner/loading-spinner.module';
import { GameListRoutingModule } from './game-list-routing.module';
import { GameListComponent } from './game-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    GameListRoutingModule,
    InfiniteScrollModule,
    SortingItemsModule,
    LoadingSpinnerModule,
    GameCardModule,
    // BrowserModule,
    // BrowserAnimationsModule
    // BsDropdownModule,

  ],
  declarations: [GameListComponent]
})
export class GameListModule { }
