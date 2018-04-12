import { Injectable } from '@angular/core';
import { ListItem } from '../entities/list-item';
import { ItemService } from './item.service';
import { Item } from '../entities/item';

@Injectable()
export class ListItemService {

  constructor() { }

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

}
