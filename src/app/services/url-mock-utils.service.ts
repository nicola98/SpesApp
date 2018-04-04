import { Injectable } from '@angular/core';
import { ServiceMapItem, AREAMOCK } from '@angular/cli';

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
      registrationAreaService: {mock: AREAMOCK, url:'auth/get/areas'}
  }

}
