import { Component, OnInit } from '@angular/core';
import { checkLoginService } from '../services/checkLoginService';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-prova1',
  templateUrl: './prova1.component.html',
  styleUrls: ['./prova1.component.css']
})
export class Prova1Component implements OnInit {

  constructor(private checkLoginService: checkLoginService, private loginService: LoginService) { }

  ngOnInit() {
  }

  doLogin() {
    this.loginService.executeLogin(
      (response) => {
        console.log("success");
        sessionStorage.setItem("logged", "true");
        this.checkLoginService.nextLogged(true);
      }, (error) => {
        console.log("error");
      });
  }

}
