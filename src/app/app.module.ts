import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Prova1Component } from './prova1/prova1.component';
import { checkLoginService } from './services/checkLoginService';
import { GenericServiceService } from './services/generic-service.service';
import { LoginService } from './services/login.service';
import { UrlMockUtilsService } from './services/url-mock-utils.service';
import { UtilityService } from './services/utility.service';


@NgModule({
  declarations: [
    AppComponent,
    Prova1Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [checkLoginService, GenericServiceService, LoginService, UrlMockUtilsService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
