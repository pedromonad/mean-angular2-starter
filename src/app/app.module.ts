import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { NoContentComponent } from './no-content/no-content.component';


import { HistoryService } from './shared/_services/history.service';
import { ROUTES } from './app.routes';
import { AuthGuard } from './shared/_guards/index';
import { AuthenticationService, ClientService } from './shared/_services/index';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ClientsComponent,
    HistoryComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ROUTES
  ],
  providers: [
    HistoryService,
    ClientService,
    AuthGuard,
    AuthenticationService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
