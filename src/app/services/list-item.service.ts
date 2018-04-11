import { Injectable } from '@angular/core';
import { ListItem } from '../entities/list-item';
import { ItemService } from './item.service';
import { Item } from '../entities/item';

@Injectable()
export class ListItemService {

  private lists = [
    new ListItem("", "frutta", "refill di frutti per macedonia"),
    new ListItem("", "carne", "cibo per il babercue di domenica"),
    new ListItem("", "pesce", "stasera si mangia pesce"),
    new ListItem("", "bibite", "solo bibite gassate"),
    new ListItem("", "snack", "per cinema")
  ];

  constructor() { }

  getListsItem(){
    return this.lists;
  }

  addItems(list: ListItem, items: Item[]){
    for(let item of items){
      list.containItems.push(item);
    }
  }

  removeItems(list: ListItem, items: Item[]){
    for(let item of items){
      const index: number = list.containItems.indexOf(item);
      if (index !== -1) {
        list.containItems.splice(index, 1);
      }      
    }
  }

  getListItemByName(name: String){
    for(let list of this.lists){
      if(list.name == name)
      return list;
    }
    return null;
  }

}
