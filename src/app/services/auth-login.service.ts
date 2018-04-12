import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CheckLoginService } from './check-login.service';

@Injectable()
export class AuthLoginService {

  constructor(private router : Router, private checkLoginService : CheckLoginService) { }

  canActivate() {
    if(sessionStorage.getItem("logged") == "true"){
        this.router.navigate(["/home"]);
        this.checkLoginService.nextLogged(true);
        return false;
      }else{
        return true;
      }
    }
}
