import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameItemComponent } from './game-item/game-item.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { UpdateGameComponent } from './update-game/update-game.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GameItemComponent,
    PaginationComponent,
    SearchComponent,
    FooterComponent,
    HeaderNavComponent,
    CreateGameComponent,
    UpdateGameComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
