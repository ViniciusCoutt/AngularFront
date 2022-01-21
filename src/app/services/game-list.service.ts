import { Game } from '../models/game';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { API_PATH, headers } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GameListService {

  private gameUrl = API_PATH + "/api/games"

  constructor(
    private http: HttpClient
  ){}

    getAll(): Observable<Game[]>{
      return this.http.get<Game[]>(this.gameUrl, {headers})
      //.pipe(
      //  take(1),
      //  tap(console.log)
      //)
    }

    sortBy(category?: string, platform?: string, release_date?: string): Observable<Game[]>{
      return this.http.get<Game[]>(`${this.gameUrl}?platform=${platform}&category=${category}&sort-by=${release_date}`,
      {headers})
    }



    /*
    getAll(): Observable<Game[]>{
      return this.http.get<Game[]>(`https://pokeapi.co/api/v2/pokemon/`)
        .pipe(map((repo: Game[]) => ({
          name: repo
          //thumb: repo.thumbnail

        })), tap(console.log))
    }
    */

  /*getAll(): Observable<any[]>{
    return this.http.get<any[]>(`${this.gameUrl}`);
      //.pipe(
      //  take(10)
      //);

  }*/

}
