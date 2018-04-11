import { Injectable } from '@angular/core';
import { ServiceMapItem } from '../model/ServiceMapItem';
import { LOGINMOCK } from '../mock/login.mock';

@Injectable()
export class UrlMockUtilsService {

  constructor() { }

  getMock(id: string): any {
    return this.serviceMap[id] ? this.serviceMap[id].mock: "";
  }

  getUrlService(id: string): any {
      return this.serviceMap[id] ? this.serviceMap[id].url : "";
  }

  serviceMap: {[key:string] : ServiceMapItem;} = {
      loginService: {mock: LOGINMOCK, url:'auth/login'}
  }

}