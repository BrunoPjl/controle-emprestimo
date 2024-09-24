import { v4 }from 'uuid';

export class Pessoa{

    // declaração fora do construtor
    private username: string;
    private id: string;
    
 // método que instancia objeto quando chamado
 // ? pode ser nulo ou não passado
 constructor( username: string, id?: string){

    this.username = username;
    if(!id){
        id = v4();
    }
    this.id = id;
 }
// método que obtém nome 
 getUserName(): string{
    return this.username
}
// método que obtém Id
getId(): string{
    return this.id
}

}

//beleza sobe