import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SinglePageSiteComponent } from './components/single-page-site/single-page-site.component';


@NgModule({
  declarations: [
    AppComponent,
    SinglePageSiteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
