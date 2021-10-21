import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesListComponent } from './games-list/games-list.component';
import { GameItemComponent } from './game-item/game-item.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { UpdateGameComponent } from './update-game/update-game.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'games', component: GamesListComponent },
  { path: 'games/create', component: CreateGameComponent },
  { path: 'games/update/:gameId', component: UpdateGameComponent },
  { path: 'games/:gameId', component: GameItemComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: '', pathMatch: 'full', redirectTo: 'games' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
