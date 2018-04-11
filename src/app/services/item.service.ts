import { Injectable } from '@angular/core';
import { Item } from '../entities/item';

@Injectable()
export class ItemService {
  private item: Item;

  private items = [
    new Item("../../../assets/product/product_1.png", "pane", 0, 0),
    new Item("../../../assets/product/product_2.png", "focaccia", 0, 0),
    new Item("../../../assets/product/product_3.png", "bon bon", 0, 0),
    new Item("../../../assets/product/product_4.png", "cioccolato", 0, 0),
    new Item("../../../assets/product/product_5.png", "torta", 0, 0),
    new Item("../../../assets/product/product_6.png", "petto di pollo", 0, 0),
    new Item("../../../assets/product/product_7.png", "pomodorini", 0, 0),
    new Item("../../../assets/product/product_8.png", "formaggio", 0, 0)];

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


}
