import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from './games-list/games-list.component';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private apiBaseUrl: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  public getGames(): Promise<Game[]> {
    const url: string = `${this.apiBaseUrl}/games/?count=10`;
    return this.http
      .get(url)
      .toPromise()
      .then((response) => response as Game[])
      .catch(this.handleError);
  }
  public getGame(gameId: string): Promise<Game> {
    const url: string = `${this.apiBaseUrl}/games/${gameId}`;
    return this.http
      .get(url)
      .toPromise()
      .then((response) => response as Game)
      .catch(this.handleError);
  }

  public deleteGame(gameId: string): Promise<Game> {
    const url: string = `${this.apiBaseUrl}/games/${gameId}`;
    return this.http
      .delete(url)
      .toPromise()
      .then((response) => response as Game)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.log('Something went wrong ', error);
    return Promise.reject(error.message || error);
  }
}
