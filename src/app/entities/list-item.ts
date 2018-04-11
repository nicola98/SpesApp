import { Item } from "./item";

export class ListItem {

    img: string;
    name: string;
    description: string;
    containItems: Item[];

    constructor(img : string ="", name : string ="", description : string =""){
        this.img = img;
        this.name = name;
        this.description = description;
    }

}
