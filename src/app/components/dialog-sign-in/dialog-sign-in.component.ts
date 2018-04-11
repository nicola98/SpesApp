import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../data/User';
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
 
  constructor(private router : Router, private checkLoginService : CheckLoginService){

  }


  ngOnInit() {
    
  }

  accedi2(){
    console.log("entri in accedi");
    this.checkLoginService.nextLogged(false);
    this.router.navigate(['/home']);
    //this.router.navigate(['/home'])
   /*  this.loginService.executeLogin(this.user,
      (response) => {
        console.log("success");
       sessionStorage.setItem("logged", "true");
       this.checkLoginService.nextLogged(true);
      
     }, (error) => {
       console.log("error");
     }); */
   }

}
