import { LoadingSpinnerComponent } from './loading-spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [LoadingSpinnerComponent],
  imports: [
    CommonModule,
    TooltipModule.forRoot()
  ],
  exports: [LoadingSpinnerComponent]
})
export class LoadingSpinnerModule { }
