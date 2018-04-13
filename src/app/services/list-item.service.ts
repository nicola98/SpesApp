import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { GenericServiceService } from './generic-service.service';

@Injectable()
export class ListItemService {

  constructor(private genericService : GenericServiceService) { }

  returnListItem(idList : string, callback: (response:any)=>void = null, errorCallBack: (error:any)=>void = null){
    let header = new HttpHeaders();
    this.genericService.callGet(
      'returnListItem', 
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
