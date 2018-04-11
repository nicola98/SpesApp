export class Item {
 
    img: string;
    name: string;
    weight: number;
    quantity: number;

    constructor(img : string ="", name : string ="", weight : number = undefined, quantity : number = undefined ){
      
        this.img = img;
        this.name = name;
        this.weight = weight;
        this.quantity = quantity;

    }
}
