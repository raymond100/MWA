import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { GamesService } from '../games.service';
import { Game } from '../games-list/games-list.component';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css'],
})
export class UpdateGameComponent implements OnInit {
  constructor(
    private gamesService: GamesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  model = new Game();

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      let id: string = param.get('gameId') || '';
      this.gamesService.getGame(id).then((game) => {
        this.model = game;
      });
    });
  }

  submitted = false;

  updateGame() {
    console.log('clicked', this.model);
    this.gamesService
      .updateGame(this.model)
      .then(() => {
        this.router.navigate(['games']);
      })
      .catch((error) => {
        console.log(error);
      });

    this.submitted = true;
  }
}
