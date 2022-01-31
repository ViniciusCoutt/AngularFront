import { LoadingSpinnerService } from './../../../../shared/services/spinner.service';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Game } from '@app/models/game';
import { GameListService } from '@shared/services/game-list.service';
import { EMPTY, observable, Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],

})
export class GameListComponent {

  games$ = this.gameListServ.games$;
  // games$: any;


  showBtn: boolean = false;
  private scrollHeight = 500;



  constructor(@Inject(DOCUMENT) private document: Document,
    private gameListServ: GameListService,
    // public spinner: LoadingSpinnerService
  ) {
    // this.games$ = this.loadCards();
    console.log(this.games$);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showBtn = (yOffSet || scrollTop) > this.scrollHeight;
  }

  scrollUp(): void {
    this.document.documentElement.scrollTop = 0;
  }

  // onScrollDown(): void {
  //   this.spinner.show();
  //   this.notScrolled = false;
  //   this.loadCards();
  //   console.log("Scrolled")
  // }

  // loadCards(): any {
  //   // this.gameListServ.games$.subscribe(valor => {this.games$.push(valor)});
  //   // this.games$ = this.gameListServ.games$.subscribe(value => value.splice(0, 10));
  //   // this.games$ = this.gameListServ.games$.pipe(map( value => {
  //   //    value.slice(0, 10)
  //   //   })
  //   // );
  //   // this.games$ =
  //   this.gameListServ.games$.pipe(map( (v: Game[]) => { return v.slice(0, 10)})).subscribe;
  //   console.log(this.games$)

  // }
}
