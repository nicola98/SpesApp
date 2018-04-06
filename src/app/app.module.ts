import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FooterComponent } from './components/footer/footer.component';
=======
import { SinglePageSiteComponent } from './components/single-page-site/single-page-site.component';
import { HeaderComponent } from './components/header/header.component';
>>>>>>> origin/Single-Page-Site


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FooterComponent
=======
    SinglePageSiteComponent,
    HeaderComponent
>>>>>>> origin/Single-Page-Site
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
