import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { GameListComponent } from './components/pages/games/game-list/game-list.component';
// import { HomeComponent } from './components/pages/home/home.component';
// import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FooterComponent } from './shared/components/footer/footer.component';
// import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from '@shared/components/header/header.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    // HeaderComponent,
    // HomeComponent,
    // GameListComponent,
    // NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    BsDropdownModule,
    CollapseModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
