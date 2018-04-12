import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CheckNameService {

  private nameUser: Subject<string> = new Subject<string>();

  public nameUser$ = this.nameUser.asObservable();

  public nextUserName(nameUser: string){
    this.nameUser.next(nameUser);
  }

}
