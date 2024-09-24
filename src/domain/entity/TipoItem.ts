import { v4 }from 'uuid';

export class TipoItem{

    // declaração fora do construtor
    private name: string;
    private id: string;
    
 // método que instancia objeto quando chamado
 // ? pode ser nulo ou não passado
 constructor( name: string, id?: string){

    this.name = name;
    if(!id){
        id = v4();
    }
    this.id = id;
 }
// método que obtém nome 
 getName(): string{
    return this.name
}
// método que obtém Id
getId(): string{
    return this.id
}

}

//beleza sobe