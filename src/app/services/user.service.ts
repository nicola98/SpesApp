import { Injectable } from '@angular/core';
import { LoginUser } from '../model/data/LoginUser';

@Injectable()
export class UserService {

  private users: LoginUser[] = [
    new LoginUser("01", "Simo"),
    new LoginUser("02", "Utente")
  ];

  getUsersList(): LoginUser[] {
    return this.users;
  }

  checkIsLogged(sessionValue: string): boolean {
    if (sessionValue != null) {
      for (let user of this.users) {
        if (user.username == sessionValue) {
          if (user.amministratore == true) {
            return true;
          } else {
            return false;
          }
        }
      }
    }
  }

}
