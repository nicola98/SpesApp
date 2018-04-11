import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { CheckLoginService } from '../../services/check-login.service';
import { User } from '../../data/User';
import { Router } from '@angular/router';
import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-sign-up',
  templateUrl: './dialog-sign-up.component.html',
  styleUrls: ['./dialog-sign-up.component.css']
})
export class DialogSignUpComponent implements OnInit {

 
  private checkLoginService : CheckLoginService;
  private router : Router;
  
  
  constructor(private dialog: MatDialog,  private loginService : LoginService) { }

  ngOnInit() {
  }

  accedi(){
    console.log("entri in accedi");
  
    this.dialog._afterAllClosed(this.dialog.open(DialogSignInComponent));
   }

}
