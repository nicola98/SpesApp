import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { LoginUser } from '../model/data/LoginUser';

@Injectable()
export class AuthLoginService {

  users:  LoginUser[];

  constructor() {
    let userService : UserService = new UserService();
    this.users = userService.getUsersList();
   }

  checkLogin(username: string, password: string): boolean {
    for(let user of this.users){
      if (username == user.username && password == user.password) {
        sessionStorage.setItem('user', username);
        return true;
      }
    }
  }

}
