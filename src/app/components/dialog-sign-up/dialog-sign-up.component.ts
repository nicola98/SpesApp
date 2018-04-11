import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CheckLoginService } from '../../services/check-login.service';
import { User } from '../../data/User';

@Component({
  selector: 'app-dialog-sign-up',
  templateUrl: './dialog-sign-up.component.html',
  styleUrls: ['./dialog-sign-up.component.css']
})
export class DialogSignUpComponent implements OnInit {

  private user: User = new User();
  private loginService : LoginService;
   private checkLoginService : CheckLoginService;
   
  constructor() { }

  ngOnInit() {
  }

  accedi(){
    this.loginService.executeLogin(this.user,
      (response) => {
        console.log("success");
        sessionStorage.setItem("logged", "true");
        this.checkLoginService.nextLogged(true);
        //this.router.navigate(["/" + RoutingEnum.Home]);
      }, (error) => {
        console.log("error");
      });
  }

}
