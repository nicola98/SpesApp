import { Item } from "./Item";

export class List{
    id: number;
    name: string;
    image: string;
    item: Item[];
    userId: number;
    description:String;

    constructor(id: number = undefined, name: string = null, image: string = null, 
        item: Item[]=null, userId: number = undefined, description:String = null){
        this.id = id;
        this.name = name;
        this.image = image;
        this.item = item;
        this.userId = userId;
        this.description=description;
    }
}