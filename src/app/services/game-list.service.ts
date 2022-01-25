import { Game } from '../models/game';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH, headers } from 'src/environments/environment';
import { Observable } from 'rxjs';

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
    // category = undefined ? category = " " : category = `?category=${category}`
    // platform = undefined ? platform = "" : platform = `?platform=${platform}`
    // ${platform}${category}?
    //console.log(window.location.search)

    // this.result = this.http.get<Game[]>(`${this.gameUrl}${window.location.search}`,
    // {headers})

    this.result = this.http.get<Game[]>(`${this.gameUrl}${url}`, { headers });

    //this.event.emit(this.result)

    //GameListService.eventt.emit(this.result)

    return this.result;
  }
}
