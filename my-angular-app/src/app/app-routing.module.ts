import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesListComponent } from './games-list/games-list.component';
import { GameItemComponent } from './game-item/game-item.component';

const routes: Routes = [
  { path: 'games', component: GamesListComponent },
  { path: 'games/:gameId', component: GameItemComponent },
  { path: '', pathMatch: 'full', redirectTo: 'games' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
