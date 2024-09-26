import { Item } from "../../../domain/entity/Item";
import { TipoItem } from "../../../domain/entity/TipoItem";
import { ItemRepository } from "../../../domain/repository/item-repository";

export class ItemRepositoryMemory implements ItemRepository{

    private itens: Item[];

    constructor()
    {
        const tipoItem1 = new TipoItem('copos', '3f8a4dda-7674-429a-9b09-c8e9a7f609af')
        const tipoItem2 = new TipoItem('computadores', '306b482e-aa11-4772-a531-eee9429ec7a3')
        this.itens = [

            new Item( tipoItem1,'copo de cafe', '2cf12ec0-66c9-4d3d-91cd-b497b12148f0'),
            new Item( tipoItem1,'copo de agua', '9ac0b451-7cd0-4877-8daa-13e70d830004'),
            new Item(tipoItem2, 'pc desktop da dell', '7b63f78d-bf43-429a-8055-fd81016a41ac')
        ]
    }




    getall(): Item[] {
        return this.itens;
        
    }
    getById(id: string): Item {
        const item = this.itens.find(valor => valor.getId() == id)
        if(!item){
            throw new Error('item not found')
        }

        return item;
    }
    create(item: Item): void {
        this.itens.push(item);
    }
    update(item: Item): void {
        throw new Error("Method not implemented.");
    }
    



}