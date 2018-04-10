import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SinglePageSiteComponent } from './components/single-page-site/single-page-site.component';
import { HeaderComponent } from './components/header/header.component';
import { DialogSignUpComponent } from './components/dialog-sign-up/dialog-sign-up.component';
import { DialogSignInComponent } from './components/dialog-sign-in/dialog-sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    SinglePageSiteComponent,
    HeaderComponent,
    DialogSignUpComponent,
    DialogSignInComponent
  ],
  entryComponents: [
    DialogSignUpComponent,
    DialogSignInComponent
  ], 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
