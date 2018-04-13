import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  actUser : string = "ciao";

  constructor(private router: Router) {
    this.actUser=sessionStorage.getItem("user");
   }

   logOut(){
    sessionStorage.setItem("logged", "false");
    this.router.navigate(["/single-page-site"]);
   }

  ngOnInit() {
  }

}
