import { Component, OnInit } from '@angular/core';

import { GamesService } from '../games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css'],
})
export class GamesListComponent implements OnInit {
  games: Game[] = [];
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService.getGames().then((games) => {
      this.games = games;
    });
  }
}

export class Game {
  _id!: string;
  title!: string;
  price!: number;
  rate!: string;
  year!: number;
  publisher!: any;
  minPlayers!: number;
  maxPlayers!: number;
  age!: number;
}
