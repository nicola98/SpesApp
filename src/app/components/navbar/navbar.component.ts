import { Component, OnInit } from '@angular/core';
import { CheckNameService } from '../../services/check-name.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  actUser : string = "ciao";

  constructor(private checkNameService : CheckNameService) {
    console.log("newValue fuori");
    this.checkNameService.nameUser$ .subscribe ((newValue: string) => {
      console.log("newValue");
      console.log(newValue);
      console.log("newValue");
      this.actUser = newValue;
    });
    console.log("newValue fuori");
   }

  ngOnInit() {
  }

}
