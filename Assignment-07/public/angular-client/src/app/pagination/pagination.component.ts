import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//import { GamesService } from '../games.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  constructor() {}

  currentPage: number = 1;
  perPage: number = 10;
  offset: number = this.perPage * this.currentPage;
  // TODO: Generate number page auto
  appFiltered: number = 100;

  @Output() pOffset = new EventEmitter();

  ngOnInit(): void {}

  previousPage(page: number) {
    if (this.currentPage > 1) {
      this.currentPage = page - 1;
      this.offset = this.perPage * this.currentPage;
      this.pOffset.emit(this.offset);
    }
  }

  nextPage(page: number) {
    if (this.offset < this.appFiltered) {
      this.currentPage = page + 1;
      this.offset = this.perPage * this.currentPage;
    }
  }

  setCurrentPage(page: string) {
    this.currentPage = parseInt(page);
    this.offset = this.perPage * this.currentPage;
  }

  // callGames() {
  //   this.gamesService.getGames().then((games) => {
  //     this.games = games;
  //   });
  // }
}
