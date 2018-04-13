import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../entities/User';
import { LoginService } from '../../services/login.service';
import { CheckLoginService } from '../../services/check-login.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogSignUpComponent } from '../dialog-sign-up/dialog-sign-up.component';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-dialog-sign-in',
  templateUrl: './dialog-sign-in.component.html',
  styleUrls: ['./dialog-sign-in.component.css']
})
export class DialogSignInComponent implements OnInit {
  
  private actualUser : string;
  private idActualUser : string;
  private mockUser : string[];
  private actualUserValue : string[];
  private user : User = new User("email", "password");
  constructor(private router : Router, private checkLoginService : CheckLoginService, private loginService : LoginService,){

  }


  ngOnInit() {
    
  }

  accedi2(){
    console.log("entri in accedi");
     this.loginService.executeLogin(this.user,
      (response) => {
        console.log("success");
        this.actualUser = response.user;
        this.idActualUser = response.id;
        this.router.navigate(['/home']);
        sessionStorage.setItem("logged", "true");
        sessionStorage.setItem("user", this.actualUser);
        sessionStorage.setItem("idUser", this.idActualUser)
        this.checkLoginService.nextLogged(true);
        console.log(this.actualUser);
     }, (error) => {
       console.log("error");
    }); 
  }

}
