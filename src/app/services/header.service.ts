import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeaderService {

  constructor() { }

  private anchor: Subject<string> = new Subject<string>();

  public anchor$ = this.anchor.asObservable();

  public setAnchor(id: string) {
    this.anchor.next(id);
  }

}