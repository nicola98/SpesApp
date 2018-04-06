import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { SinglePageSiteComponent } from './components/single-page-site/single-page-site.component';
import { HeaderComponent } from './components/header/header.component';
import { CheckLoginService } from './services/check-login.service';
import { GenericServiceService } from './services/generic-service.service';
import { LoginService } from './services/login.service';
import { UrlMockUtilsService } from './services/url-mock-utils.service';
import { UtilityService } from './services/utility.service';


@NgModule({
  declarations: [
    AppComponent,
    SinglePageSiteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [CheckLoginService, GenericServiceService, LoginService, UrlMockUtilsService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
