import { v4 }from 'uuid';
import { Item } from './Item';
import { Pessoa } from './Pesssoa';
import { Usuario } from './Usuario';
import { ItemEPI } from './value-object/item-epi';
import { TipoItem } from './TipoItem';

export class Emprestimo{

    // declaração fora do construtor
    
    readonly id: string;
    readonly tipoItem: TipoItem;
    private item: Item;
    private itemEpi: ItemEPI;
    private usuario: Usuario;
    private pessoa: Pessoa;
    

    
 // método que instancia objeto quando chamado
 // ? pode ser nulo ou não passado
 constructor(tipoItem: TipoItem, item: Item,itemEpi: ItemEPI,readonly dataemprestimo: Date, readonly datadevolucao: Date,id: string,usuario: Usuario,pessoa: Pessoa,){
    this.tipoItem = tipoItem;
    this.dataemprestimo = dataemprestimo;
    this.datadevolucao = datadevolucao;
    this.item = item;
    this.itemEpi = itemEpi;
    this.usuario = usuario;
    this.pessoa = pessoa;
    
    if(!id){
        id = v4();
    }
    this.id = id;
 }
// método que obtém Id
 getId(): string{
    return this.id
}
// método que obtém um item 
 getItem(): Item{
    return this.item
}

getTipoItem(): TipoItem{
    return this.tipoItem
}

// obtem ca e validade epi
getItemEPI(): ItemEPI{
    return this.itemEpi;
}
// método que obtém Dataemp
getDataEmprestimo(): Date{
    return this.dataemprestimo
}
// método que obtém dataval
getDataDevolucao(): Date{
    return this.datadevolucao
}
// método que obtém pessoa
getPessoa(): Pessoa{
    return this.pessoa
}
// método que obtém usuario
getUsuario(): Usuario{
    return this.usuario
}


}

