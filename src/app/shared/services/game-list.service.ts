import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, take } from 'rxjs';
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
      .subscribe(() => {
        if (window.location.pathname !== '/games') return;
        this.getApiData();
      });
  }

  getApiData(): void {
    this.url = window.location.search;

    this.http
      .get<Game[]>(`${API_PATH}${this.url}`, { headers })
      .pipe(take(1))
      .subscribe((res) => this.gamesSubject.next(res));
  }
}
