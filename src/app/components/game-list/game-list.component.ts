import { Component, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { catchError, Observable, of } from 'rxjs';
import { Game } from 'src/app/models/game';
import classification from 'src/app/shared/classification-items';

import { GameListService } from '../../services/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  providers: [GameListService],
})
export class GameListComponent {
  games$: Observable<Game[]>;
  url: string;
  platforms: any;
  release_date: string;
  categories: any;
  platSelected: string;
  error: string;
  isAnError: boolean;

  constructor(
    private gameListServ: GameListService,
    private router: Router,
    // private modalService: BsModalService
  ) {
    this.router.events.subscribe((x) => {
      this.url = window.location.search;
      this.get(this.url);
    });

    this.platforms = classification.platforms;
    this.categories = classification.genres;
  }

  get(url?: string): void {
    this.games$ = this.gameListServ.get(url).pipe(
      catchError(() => {
        // this.isAnError = !this.isAnError;
        return of([]);
      })
    );
    this.games$,
      (error: any) => {
        console.log(error);
      };
  }

  // modalRef?: BsModalRef;
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  //   this.isAnError = false;
  // }
}
