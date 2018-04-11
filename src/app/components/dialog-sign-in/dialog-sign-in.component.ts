import { Component, OnInit } from '@angular/core';
import { User } from '../../data/User';
import { LoginService } from '../../services/login.service';
import { CheckLoginService } from '../../services/check-login.service';

@Component({
  selector: 'app-dialog-sign-in',
  templateUrl: './dialog-sign-in.component.html',
  styleUrls: ['./dialog-sign-in.component.css']
})
export class DialogSignInComponent implements OnInit {

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
