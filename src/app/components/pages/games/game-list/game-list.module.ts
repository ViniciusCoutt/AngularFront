import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { GameListRoutingModule } from './game-list-routing.module';
import { GameListComponent } from './game-list.component';


@NgModule({
  imports: [
    CommonModule,
    GameListRoutingModule,
    InfiniteScrollModule,
    BsDropdownModule
  ],
  declarations: [GameListComponent]
})
export class GameListModule { }
