import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { SinglePageSiteComponent } from "../components/single-page-site/single-page-site.component";
import { HomeComponent } from "../components/home/home.component";
import { ListDetailComponent } from "../components/list-detail/list-detail.component";
import { RicetteComponent } from "../components/ricette/ricette.component";
import { UserProfileComponent } from "../components/user-profile/user-profile.component";
import { ComponentNotFoundComponent } from "../components/component-not-found/component-not-found.component";
import { AuthLoginService } from "../services/auth-login.service";
import { AuthServiceService } from "../services/auth-service.service";

//, 
const appRoutes: Routes = [
    { path: 'single-page-site', component: SinglePageSiteComponent, canActivate: [AuthLoginService]},
    { path: 'home', component: HomeComponent, canActivate: [AuthServiceService]},
    { path: 'detail-detail/:id', component: ListDetailComponent, canActivate: [AuthServiceService]},
    { path: 'ricette', component: RicetteComponent, canActivate: [AuthServiceService]},
    { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthServiceService]},
    { path: '', redirectTo: '/single-page-site', pathMatch: 'full'},
    { path: '**', component: ComponentNotFoundComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
  })
  export class MainRouter { }