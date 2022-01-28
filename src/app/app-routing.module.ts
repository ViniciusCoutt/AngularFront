import { HomeComponent } from './components/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './components/pages/games/game-list/game-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
  { path: 'games', loadChildren: () => import('./components/pages/games/game-list/game-list.module').then(m => m.GameListModule) },
  { path: 'game-details/:id', loadChildren: () => import('./components/pages/games/game-list/game-details/game-details.module').then(m => m.GameDetailsModule) },
  { path: '**', loadChildren: () => import('./components/pages/not-found/not-found.module').then(m => m.NotFoundModule) },

  // { path: 'games', component: GameListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

export class AppRoutingModule { }
