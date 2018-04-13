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
import { RegistratiService } from './services/registrati.service';
import { CheckNameService } from './services/check-name.service';
import { ListService } from './services/list.service';
import { HomeListeComponent } from './components/home-liste/home-liste.component';
import { DialogAddListComponent } from './components/dialog-add-list/dialog-add-list.component';
import { ElencoListeComponent } from './components/elenco-liste/elenco-liste.component';
import { ListItemService } from './services/list-item.service';
import { DialogAddItemComponent } from './components/dialog-add-item/dialog-add-item.component';
import { DialogModificaListaComponent } from './components/dialog-modifica-lista/dialog-modifica-lista.component';
import { DialogElimitaListaComponent } from './components/dialog-elimina-lista/dialog-elimita-lista.component';


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
    NavbarComponent,
    HomeListeComponent,
    DialogAddListComponent,
    ElencoListeComponent,
    DialogAddItemComponent,
    DialogModificaListaComponent,
    DialogElimitaListaComponent
  ],
  entryComponents: [
    DialogSignUpComponent,
    DialogSignInComponent,
    DialogAddListComponent,
    DialogElimitaListaComponent,
    DialogModificaListaComponent
  ], 
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    MainRouter
  ],
  providers: [CheckLoginService, GenericServiceService, LoginService, UrlMockUtilsService,
     UtilityService, AuthLoginService, AuthServiceService, RegistratiService, CheckNameService, ListService, ListItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
