import { Component, OnInit } from '@angular/core';

import { Game } from '../games-list/games-list.component';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css'],
})
export class CreateGameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  model = new Game();

  submitted = false;

  createGame() {
    this.submitted = true;
  }
}
