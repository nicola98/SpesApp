export class Item{
    id: number;
    name: string;
    image: string;
    dose: string;
    quantity: string;
    gotIt: boolean;

    constructor(id: number, name: string, image: string, dose: string, quantity:string, gotIt: boolean){
        this.id = id;
        this.name = name;
        this.image=image;
        this.dose=dose;
        this.quantity=quantity;
        this.gotIt = gotIt;
    }
}