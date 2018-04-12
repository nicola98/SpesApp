import { Injectable } from '@angular/core';
import { ListItem } from '../entities/list-item';
import { ListItemService } from './list-item.service';
import { UserList } from '../entities/user-list';

@Injectable()
export class UserListService {

  private list: ListItem;
  private userFolder = new UserList();

  private lists = [new ListItem("","frutta","")];

  constructor() { }

  getUserList(){
    return this.lists;
  }

  newListItem(img : string ="", name : string ="", description : string =""){
    this.list = new ListItem(img, name, description);
    return this.userFolder.userList.push(this.list);
  }

  removeListItem(name: String){  
    this.list = this.getListItemByName(name);
    
      const index: number = this.userFolder.userList.indexOf(this.list);
      if (index !== -1) {
        this.userFolder.userList.splice(index, 1);
      }      
  }

  getListItemByName(name: String){
    for(let list of this.userFolder.userList){
      if(list.name == name)
      return list;
    }
    return null;
  }

}
