import { Game } from '../../models/game';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH, headers } from 'src/environments/environment';
import {
  BehaviorSubject,
  delay,
  EMPTY,
  filter,
  first,
  isEmpty,
  Observable,
  take,
  tap,
} from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GameListService {
  private gamesSubject = new BehaviorSubject<Game[]>([]);
  games$: Observable<Game[]> = this.gamesSubject.asObservable();

  constructor(private http: HttpClient) {

  }

  getApiData(url?: string): void {


    this.http.get<Game[]>(`${API_PATH}${url}`, { headers })
      .pipe(
        take(1),
        tap(res => {
          this.gamesSubject.next(res);
          console.log(res)
        })
      ).subscribe();

  }
}
