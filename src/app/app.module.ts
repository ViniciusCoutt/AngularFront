import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/components/header/header.module';
import { LoadingSpinnerModule } from './shared/components/loading-spinner/loading-spinner.module';
import { LoadingSpinnerInterceptor } from './shared/interceptors/spinner.interceptors';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HeaderModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoadingSpinnerModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingSpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
