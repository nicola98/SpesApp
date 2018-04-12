import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';
import { Router } from '@angular/router';

@Injectable()
export class AuthServiceService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(sessionStorage.getItem("logged") == "true"){
      return true;
    }else{
      this.router.navigate(["/single-page-site"]);
      return false;
    }
  }

}
