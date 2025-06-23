import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth-interceptor';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [CommonModule,
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule], providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
