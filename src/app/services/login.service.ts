import { Injectable } from '@angular/core';
import { GenericServiceService } from './generic-service.service';
import { HttpHeaders} from '@angular/common/http';
import { User } from '../entities/User';

@Injectable()
export class LoginService {

  constructor(private genericService: GenericServiceService) { }

  executeLogin(user : User, callback: (response:any)=>void = null, errorCallBack: (error:any)=>void = null){
    let header = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(user.email)
    });
    this.genericService.callGet(
      'loginService', 
      header, 
      (response)=>{
        if(callback)
        callback(response)
      }, 
      (error)=>{
        if(errorCallBack)
        errorCallBack(error)
      });
  }

}
