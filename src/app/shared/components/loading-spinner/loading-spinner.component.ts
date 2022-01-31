import { LoadingSpinnerService } from '@app/shared/services/spinner.service';
import { withLatestFrom } from 'rxjs';
import { GameListService } from '@shared/services/game-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: `
  <div class="overlay" *ngIf="isLoading$ | async" >
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>`,
  styleUrls: ['./loading-spinner.component.scss'],
  // providers:
})
export class LoadingSpinnerComponent {

  isLoading$ = this.spinnerServ.isLoading$;

  constructor( private spinnerServ: LoadingSpinnerService) {}
}
