import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from './games-list/games-list.component';
import { User } from './register/register.component';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private apiBaseUrl: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  public async getGames(count = 10, offset = 0, search = ''): Promise<Game[]> {
    const url: string = `${this.apiBaseUrl}/games/?count=${count}&offset=${offset}&search=${search}`;
    console.log(url);
    try {
      const response = await this.http.get(url).toPromise();
      return response as Game[];
    } catch (error) {
      return this.handleError(error);
    }
  }
  public async getGame(gameId: string): Promise<Game> {
    const url: string = `${this.apiBaseUrl}/games/${gameId}`;
    try {
      const response = await this.http.get(url).toPromise();
      return response as Game;
    } catch (error) {
      return this.handleError(error);
    }
  }
  public async addGame(payload: Game): Promise<Game> {
    const url: string = `${this.apiBaseUrl}/games/`;
    try {
      const response = await this.http.post(url, payload).toPromise();
      return response as Game;
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async addUser(payload: User): Promise<User> {
    const url: string = `${this.apiBaseUrl}/auth/register/`;
    try {
      const response = await this.http.post(url, payload).toPromise();
      return response as User;
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async updateGame(payload: Game): Promise<Game> {
    const url: string = `${this.apiBaseUrl}/games/${payload._id}`;
    console.log(url);
    try {
      const response = await this.http.put(url, payload).toPromise();
      return response as Game;
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async deleteGame(gameId: string): Promise<Game> {
    const url: string = `${this.apiBaseUrl}/games/${gameId}`;
    try {
      const response = await this.http.delete(url).toPromise();
      return response as Game;
    } catch (error) {
      return this.handleError(error);
    }
  }
  private handleError(error: any): Promise<any> {
    console.log('Something went wrong ', error);
    return Promise.reject(error.message || error);
  }
}
