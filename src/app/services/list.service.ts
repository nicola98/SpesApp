import { Injectable } from '@angular/core';
import { GenericServiceService } from './generic-service.service';
import { HttpHeaders } from '@angular/common/http';
import { List } from '../entities/List';

@Injectable()
export class ListService {

  constructor(private genericService: GenericServiceService) { }

  returnList(idUser : string, callback: (response:any)=>void = null, errorCallBack: (error:any)=>void = null){
    let header = new HttpHeaders();
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


  returnListRicette(idUser : string, callback: (response:any)=>void = null, errorCallBack: (error:any)=>void = null){
    let header = new HttpHeaders();
    this.genericService.callGet(
      'returnListRicette',
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

  addLista(list : List, callback: (response:any)=>void = null, errorCallBack: (error:any)=>void = null){
    let header = new HttpHeaders();
    this.genericService.callPost(
      list,
      'addListService',
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

  eliminaLista(idList : string, callback: (response:any)=>void = null, errorCallBack: (error:any)=>void = null){
    let header = new HttpHeaders({
      idList
    });
    this.genericService.callDelete(
      'removeListService',
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

  modificaLista(list : List, callback: (response:any)=>void = null, errorCallBack: (error:any)=>void = null){
    let header = new HttpHeaders();
    this.genericService.callPut(
      list,
      'modificaListService',
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

  getListById(id: number, lists: List[]){
    for(let list of lists){
      if(list.id == id){
        return list;
      }
    }
  }
}
