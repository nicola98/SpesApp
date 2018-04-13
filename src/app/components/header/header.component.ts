import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSignUpComponent } from '../dialog-sign-up/dialog-sign-up.component';
import { DialogSignInComponent } from '../dialog-sign-in/dialog-sign-in.component';
import { Overlay } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog, private router : Router, private headerService: HeaderService) { }

  signUpopenDialog(){
    this.dialog.open(DialogSignUpComponent)
  }
  signInopenDialog(){
    this.dialog.open(DialogSignInComponent)
  }

  ngOnInit() {
  }

  setAnchor(anchor){
    this.headerService.setAnchor(anchor);
  }

}
