import { v4 }from 'uuid';
import { Item } from './Item';
import { Pessoa } from './Pesssoa';
import { Usuario } from './Usuario';

export class Emprestimo{

    // declaração fora do construtor
    private item: Item;
    private id: string;
    private dataemprestimo: Date;
    //data devolução opcional ou nulo ou undefined
    private datadevolucao?: Date  ;
    private pessoa: Pessoa;
    private usuario: Usuario;

    
 // método que instancia objeto quando chamado
 // ? pode ser nulo ou não passado
 constructor( usuario: Usuario,pessoa: Pessoa,item: Item,dataemprestimo: Date,datadevolucao?: Date,id?: string){
    this.dataemprestimo = dataemprestimo;
    this.datadevolucao = datadevolucao;
    this.usuario = usuario;
    this.pessoa = pessoa;
    this.item = item;    
    if(!id){
        id = v4();
    }
    this.id = id;
 }
// método que obtém nome 
 getItem(): Item{
    return this.item
}
// método que obtém Id
getId(): string{
    return this.id
}
// método que obtém Dataemp
getDataEmprestimo(): Date{
    return this.dataemprestimo
}
// método que obtém dataval
getDataDevolucao(): Date | undefined{
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

