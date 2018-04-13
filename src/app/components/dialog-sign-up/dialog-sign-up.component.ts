import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';
import { CheckLoginService } from '../../services/check-login.service';
import { User } from '../../entities/User';
import { Router } from '@angular/router';
import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';
import { RegistratiService } from '../../services/registrati.service';

@Component({
  selector: 'app-dialog-sign-up',
  templateUrl: './dialog-sign-up.component.html',
  styleUrls: ['./dialog-sign-up.component.css']
})
export class DialogSignUpComponent implements OnInit {
  
  private user : User = new User ();
  private username: String;

  constructor(private registratiService : RegistratiService, private dialog: MatDialog) { }

  ngOnInit() {
  }

   registrati(){
    console.log("entri in registrati");
     this.registratiService.executeRegistration(this.user,
      (response) => {
        console.log("success");
        console.log(response);
     }, (error) => {
       console.log("error");
     });
   }

   signInopenDialog(){
     this.dialog.closeAll();
    this.dialog.open(DialogSignInComponent)
  }

}
