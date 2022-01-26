import { Game } from '../models/game';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH, headers } from 'src/environments/environment';
import { delay, first, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameListService {
  private gameUrl = API_PATH + 'api/games';
  event = new EventEmitter<any>();
  static eventt = new EventEmitter<any>();
  result: Observable<Game[]>;

  constructor(private http: HttpClient) {}

  get(url?: string) {
    return this.http.get<Game[]>(`${this.gameUrl}${url}`, { headers })
    .pipe(
      first(), // After get the data, unsubscribe from the observable
      
    );
  }
}
