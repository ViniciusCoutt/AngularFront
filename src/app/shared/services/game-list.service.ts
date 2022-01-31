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

  // getGamesByPage(pageNum: number): void {
  //   this.url = window.location.search;
  //   this.http
  //   .get<Game[]>(`${ API_PATH }${ this.url }`, { headers })
  //   .pipe(
  //     // delay(10000),
  //     // first(),
  //     // filter(apiResponse => apiResponse.length <= pageNum),
  //     // pluck('id' <= pageNum),
  //     // filter(event: )
  //     map((apiResponse) => {
  //       return apiResponse.splice(0, pageNum)
  //     }),
  //     take(1),
  //     pluck('data', 'games'),
  //     withLatestFrom(this.games$),
  //     tap(([apiResponse, games]) => {
  //       // this.gamesSubject.next(res);
  //       console.log({apiResponse, games});
  //     })
  //   )
  //   .subscribe(res => console.log(res));
  // }

  getApiData(): void {
    this.url = window.location.search;

    this.http
      .get<Game[]>(`${API_PATH}${this.url}`, { headers })
      .pipe(take(1))
      .subscribe((res) => this.gamesSubject.next(res));
  }
}
