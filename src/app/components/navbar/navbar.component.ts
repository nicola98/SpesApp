import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  actUser : string = "ciao";

  constructor() {
    this.actUser=sessionStorage.getItem("user");
   }

  ngOnInit() {
  }

}
