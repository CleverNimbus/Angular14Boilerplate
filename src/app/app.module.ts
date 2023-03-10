import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/http.error.interceptor';
import { AppUnauthorizedComponent } from './components/app-unauthorized/app-unauthorized.component';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
	declarations: [AppComponent, AppUnauthorizedComponent],
	imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({}, {}), HttpClientModule, TranslocoRootModule],
	providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }],
	bootstrap: [AppComponent],
})
export class AppModule {}
