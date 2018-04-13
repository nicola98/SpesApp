import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class UtilityService {

  constructor() { }

  getUseMock(): boolean{
    return environment.useMock;
  }
}
