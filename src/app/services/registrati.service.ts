import { Injectable } from '@angular/core';
import { User } from '../entities/User';
import { GenericServiceService } from './generic-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class RegistratiService {

  constructor(private genericService : GenericServiceService) { }

  executeRegistration(user : User, callback: (response:any)=>void = null, errorCallBack: (error:any)=>void = null){
    let header = new HttpHeaders();
    this.genericService.callPost(
      user,
      'registratiService',
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
