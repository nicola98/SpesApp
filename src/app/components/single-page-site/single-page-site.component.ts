import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CheckLoginService } from '../../services/check-login.service';
import { LoginUser } from '../../model/data/LoginUser';

@Component({
  selector: 'single-page-site',
  templateUrl: './single-page-site.component.html',
  styleUrls: ['./single-page-site.component.css']
})
export class SinglePageSiteComponent implements OnInit {
  email: string;
  contentReport: string;
  private user: LoginUser = new LoginUser();
  
  constructor(private checkLoginService: CheckLoginService, private loginService: LoginService) { }

  ngOnInit() {
  }

  doLogin() {
    this.loginService.executeLogin(this.user,
      (response) => {
        console.log("success");
        sessionStorage.setItem("logged", "true");
        this.checkLoginService.nextLogged(true);
      }, (error) => {
        console.log("error");
      });
  }

}
