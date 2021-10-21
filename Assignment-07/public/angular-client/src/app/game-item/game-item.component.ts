import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Game } from '../games-list/games-list.component';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css'],
})
export class GameItemComponent implements OnInit {
  game!: Game;
  constructor(
    private gamesService: GamesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      let id: string = param.get('gameId') || '';
      this.gamesService.getGame(id).then((game) => {
        this.game = game;
      });
    });
  }

  deleteGame(id: string): void {
    this.gamesService.deleteGame(id).then(() => {
      this.router.navigate(['games']);
    });
  }
}
