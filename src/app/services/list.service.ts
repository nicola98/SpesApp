import { Injectable } from '@angular/core';
import { GenericServiceService } from './generic-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ListService {

  constructor(private genericService: GenericServiceService) { }

  returnList(username : string, callback: (response:any)=>void = null, errorCallBack: (error:any)=>void = null){
    let header = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(username)
    });
    this.genericService.callGet(
      'returnList', 
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
