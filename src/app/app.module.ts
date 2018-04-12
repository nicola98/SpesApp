import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { SinglePageSiteComponent } from './components/single-page-site/single-page-site.component';
import { HeaderComponent } from './components/header/header.component';
import { DialogSignUpComponent } from './components/dialog-sign-up/dialog-sign-up.component';
import { DialogSignInComponent } from './components/dialog-sign-in/dialog-sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { RicetteComponent } from './components/ricette/ricette.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ComponentNotFoundComponent } from './components/component-not-found/component-not-found.component';
import { MainRouter } from './router/mainRouter';
import { CheckLoginService } from './services/check-login.service';
import { GenericServiceService } from './services/generic-service.service';
import { LoginService } from './services/login.service';
import { UrlMockUtilsService } from './services/url-mock-utils.service';
import { UtilityService } from './services/utility.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthLoginService } from './services/auth-login.service';
import { AuthServiceService } from './services/auth-service.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SinglePageSiteComponent,
    HeaderComponent,
    DialogSignUpComponent,
    DialogSignInComponent,
    HomeComponent,
    ListDetailComponent,
    RicetteComponent,
    UserProfileComponent,
    ComponentNotFoundComponent,
    NavbarComponent
  ],
  entryComponents: [
    DialogSignUpComponent,
    DialogSignInComponent
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MainRouter
  ],
  providers: [CheckLoginService, GenericServiceService, LoginService, UrlMockUtilsService, UtilityService, AuthLoginService, AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
