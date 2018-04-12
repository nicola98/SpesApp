import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CheckLoginService } from '../../services/check-login.service';
import { User } from '../../entities/User';
import { Router } from '@angular/router';
import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';
import { MatDialog } from '@angular/material/dialog';
import { RegistratiService } from '../../services/registrati.service';

@Component({
  selector: 'app-dialog-sign-up',
  templateUrl: './dialog-sign-up.component.html',
  styleUrls: ['./dialog-sign-up.component.css']
})
export class DialogSignUpComponent implements OnInit {
  
  private user : User = new User ("so", "hg");
  constructor(private dialog: MatDialog, private registratiService : RegistratiService) { }

  ngOnInit() {
  }

  accedi(){
    console.log("entri in accedi");
    
   }

   registrati(){
    console.log("entri in registrati");
     this.registratiService.executeRegistration(this.user,
      (response) => {
        console.log("success");
     }, (error) => {
       console.log("error");
     });
   }

}
