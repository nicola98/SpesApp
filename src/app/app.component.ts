import { Component } from '@angular/core';
import { CheckLoginService } from './services/check-login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogged = false;

  constructor(private is: CheckLoginService){
    this.is.logged$ .subscribe ((newValue: boolean) => {
      this.isLogged = newValue;
    });
  }

  ngOnInit(){
    if(sessionStorage.getItem('user') != null){
      this.isLogged = true;
      console.log(this.isLogged);
    } 
  }
}
