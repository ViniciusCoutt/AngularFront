import { GameListComponent } from './game-list.component';
import { GameListModule } from './game-list.module';
// import { HomeModule } from './../../home/home.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [{ path: '', component: GameListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GameListRoutingModule { }
