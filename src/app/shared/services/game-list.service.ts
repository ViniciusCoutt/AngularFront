import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, delay, filter, first, Observable, tap } from 'rxjs';
import { API_PATH, headers } from 'src/environments/environment';

import { Game } from '../../models/game';

@Injectable({
  providedIn: 'root',
})
export class GameListService {
  private gamesSubject = new BehaviorSubject<Game[]>([]);
  games$: Observable<Game[]> = this.gamesSubject.asObservable();
  url: string = '';

  constructor(private http: HttpClient, private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e) => {
        if (window.location.pathname !== '/games') return;
        this.getApiData();
      });
  }

  getApiData(): void {
    this.url = window.location.search;
    this.http
      .get<Game[]>(`${API_PATH}${this.url}`, { headers })
      .pipe(
        // delay(10000),
        first(),
        tap((res) => {
          this.gamesSubject.next(res);
          console.log(res);
        })
      )
      .subscribe();
  }
}
