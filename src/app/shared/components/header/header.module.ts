import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule,
  ],
  exports: [
    [HeaderComponent]
  ],
  declarations: [HeaderComponent]
})
export class HeaderModule { }
