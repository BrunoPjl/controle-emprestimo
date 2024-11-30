import { v4 }from 'uuid';
import { TipoItem } from './TipoItem';
import { ItemEPI } from './value-object/item-epi';

export class Item{

    // declaração fora do construtor
    
    readonly id: string;
    private tipoitem: TipoItem;
    private itemEpi: ItemEPI;

 // método que instancia objeto quando chamado
 // ? pode ser nulo ou não passado
 constructor(readonly name: string, tipoItem:TipoItem, itemEpi: ItemEPI,id?: string) {
    this.tipoitem = tipoItem;
    this.name = name;
    if(!id){
        id = v4();
    }
    this.id = id;
    this.itemEpi = itemEpi
 }
// método que obtém nome 
 getName(): string{
    return this.name
}
// método que obtém Id
getId(): string{
    return this.id
}

getTipoItem(): TipoItem{
    return this.tipoitem
}

getItemEPI(): ItemEPI{
    return this.itemEpi;
}

}



