import { Injectable } from '@angular/core';
import { Item } from '../entities/item';

@Injectable()
export class ItemService {
  /*private item: Item;

  private items = [];

  constructor() { }

  getItemList(){
    return this.items;
  }

  newItem(img : string ="", name : string ="", weight : number = undefined, quantity : number = undefined){
    this.item = new Item(img, name, weight, quantity);
    return this.items.push(this.item);
  }

  getItemByName(name: string){
    for(let item of this.items){
      if(item.name == name)
      return item;
    }
    return null;
  }

  getItemBySearchName(name: string){
    for(let item of this.items){
      if(item.name.toLowerCase() === name.toLowerCase())
        return item;
    }
    return null;
  }
*/

}
