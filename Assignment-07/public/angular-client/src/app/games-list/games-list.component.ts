import { Component, OnInit } from '@angular/core';

import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css'],
})
export class GamesListComponent implements OnInit {
  games: Game[] = [];
  currentPage: number = 1;
  perPage: number = 10;
  offset: number = this.perPage * this.currentPage;
  searchGame = '';
  // TODO: Generate number page auto
  appFiltered: number = 100;
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService.getGames().then((games) => {
      this.games = games;
    });
  }

  previousPage(page: number) {
    if (this.currentPage > 1) {
      this.currentPage = page - 1;
      this.offset = this.perPage * this.currentPage;
      this.callGames();
    }
  }

  nextPage(page: number) {
    if (this.offset < this.appFiltered) {
      this.currentPage = page + 1;
      this.offset = this.perPage * this.currentPage;
      this.callGames();
    }
  }

  setCurrentPage(page: string) {
    this.currentPage = parseInt(page);
    this.offset = this.perPage * this.currentPage;
    this.callGames();
  }

  change(text: string) {
    this.callGames();
  }

  callGames() {
    this.gamesService
      .getGames(this.perPage, this.offset, this.searchGame)
      .then((games) => {
        this.games = games;
      });
  }
}

export class Game {
  _id!: string;
  title!: string;
  price!: number;
  rate!: number;
  year!: number;
  publisher!: any;
  minPlayers!: number;
  maxPlayers!: number;
  age!: number;
}
