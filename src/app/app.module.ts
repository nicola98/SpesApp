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
import { ItemService } from './services/item.service';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
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
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
