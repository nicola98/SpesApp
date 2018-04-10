import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSignUpComponent } from '../dialog-sign-up/dialog-sign-up.component';
import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  signUpopenDialog(){
    this.dialog.open(DialogSignUpComponent)
  }
  signInopenDialog(){
    this.dialog.open(DialogSignInComponent)
  }

  ngOnInit() {
  }

}
