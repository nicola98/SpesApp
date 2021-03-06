import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UrlMockUtilsService } from './url-mock-utils.service';
import { UtilityService } from './utility.service';

@Injectable()
export class GenericServiceService {

  private tkn: string;
  constructor(private http: HttpClient, private utilityService: UtilityService, private urlMockService: UrlMockUtilsService) { }
  
  getAuthHeader(header: HttpHeaders){
    if(header == null || header == undefined){
      header = new HttpHeaders();
    }
    if(this.tkn){
      return header.set('Authorization', 'Bearer '+this.tkn);
    }else{
      return header;
    }
  }

  callGet(idUrl: string, header: HttpHeaders =null, callback =null, errorCallback = null){
    if(this.utilityService.getUseMock())
    {
      this.http.get(this.urlMockService.getUrlService(idUrl), { headers: this.getAuthHeader(header), observe: 'response' }).subscribe(
        response=>{
          if(callback)
            callback(response.body);
        },
        error=>{
          if(errorCallback)
            errorCallback(error)
        }
      )
    }
    else{
      callback(this.urlMockService.getMock(idUrl));
    }
    
  }

  callPost(body: any, idUrl: string, header: HttpHeaders = null, callback = null, errorCallback = null){
    if(this.utilityService.getUseMock())
    {
      this.http.post(this.urlMockService.getUrlService(idUrl), body, { headers: this.getAuthHeader(header), observe: 'response' }).subscribe(
        response=>{
          if(response.headers && response.headers.get("jwt")){
            this.tkn = response.headers.get("jwt");
          }
          if(callback)
            callback(response)
        },
        error=>{
          if(errorCallback)
            errorCallback(error)
        }
      )
    }
    else{
      callback(this.urlMockService.getMock(idUrl));
    }
  }

  callDelete(idUrl: string, header: HttpHeaders = null, callback = null, errorCallback = null){
    if(this.utilityService.getUseMock())
    {
      this.http.delete(this.urlMockService.getUrlService(idUrl), { headers: this.getAuthHeader(header), observe: 'response' }).subscribe(
        response=>{
          if(response.headers && response.headers.get("jwt")){
            this.tkn = response.headers.get("jwt");
          }
          if(callback)
            callback(response)
        },
        error=>{
          if(errorCallback)
            errorCallback(error)
        }
      )
   }
   else{
    callback(this.urlMockService.getMock(idUrl));
    }
  }

  callPut(body: any, idUrl: string, header: HttpHeaders = null, callback = null, errorCallback = null){
    if(this.utilityService.getUseMock())
    {
      this.http.put(this.urlMockService.getUrlService(idUrl), body, { headers: this.getAuthHeader(header), observe: 'response' }).subscribe(
        response=>{
          if(response.headers && response.headers.get("jwt")){
            this.tkn = response.headers.get("jwt");
          }
          if(callback)
            callback(response)
        },
        error=>{
          if(errorCallback)
            errorCallback(error)
        }
      )
    }
    else{
      callback(this.urlMockService.getMock(idUrl));
    }
  }
}
