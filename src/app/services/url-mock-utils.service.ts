import { Injectable } from '@angular/core';
import { ServiceMapItem } from '../model/ServiceMapItem';
import { LOGINMOCK } from '../mock/login.mock';
import { REGISTRATIMOCK } from '../mock/registrati.mock';
import { LISTALISTMOCK } from '../mock/listaList.mock';
import { ADDLISTMOCK } from '../mock/addList.mock';

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
      loginService: {mock: LOGINMOCK, url:'auth/login'},
      registratiService: {mock: REGISTRATIMOCK, url:'auth/registrati'},
      returnList: {mock: LISTALISTMOCK, url:'auth/List'},
      addListService: {mock: ADDLISTMOCK, url:'auth/addList'}
  }

}
