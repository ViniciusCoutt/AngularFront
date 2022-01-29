import { RouterModule } from '@angular/router';
import { SortingItemsComponent } from './sorting-items.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



@NgModule({
  declarations: [SortingItemsComponent],
  imports: [
    CommonModule,
    BsDropdownModule,
    RouterModule
  ],
  exports: [SortingItemsComponent]
})
export class SortingItemsModule { }
