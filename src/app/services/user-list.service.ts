import { Injectable } from '@angular/core';
import { ListItem } from '../entities/list-item';
import { ListItemService } from './list-item.service';
import { UserList } from '../entities/user-list';

@Injectable()
export class UserListService {

  private list: ListItem;
  private userList = new UserList();

  constructor() { }

  getUserList(){
    return this.userList.userList;
  }

  newListItem(img : string ="", name : string ="", description : string =""){
    this.list = new ListItem(img, name, description);
    return this.userList.userList.push(this.list);
  }

  removeListItem(name: String){
    this.list = this.getListItemByName(name);
    
      const index: number = this.userList.userList.indexOf(this.list);
      if (index !== -1) {
        this.userList.userList.splice(index, 1);
      }      
  }

  getListItemByName(name: String){
    for(let list of this.userList.userList){
      if(list.name == name)
      return list;
    }
    return null;
  }

}
