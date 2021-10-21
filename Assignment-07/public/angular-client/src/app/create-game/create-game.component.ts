import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GamesService } from '../games.service';
import { Game } from '../games-list/games-list.component';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css'],
})
export class CreateGameComponent implements OnInit {
  constructor(private gamesService: GamesService, private router: Router) {}

  ngOnInit(): void {}

  model = new Game();

  submitted = false;

  createGame() {
    console.log('clicked', this.model);
    this.gamesService
      .addGame(this.model)
      .then(() => {
        this.router.navigate(['games']);
      })
      .catch((error) => {
        console.log(error);
      });

    this.submitted = true;
  }
}
