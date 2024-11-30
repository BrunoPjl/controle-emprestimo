import { v4 }from 'uuid';
import { Pessoa } from './Pesssoa';


export class Usuario{

    // declaração fora do construtor
    readonly id: string;
    readonly nameuser: string; 
    readonly password: string
    readonly pessoa: Pessoa;
    
 // método que instancia objeto quando chamado
 // ? pode ser nulo ou não passado
 constructor(id: string, nameuser:string, password: string, pessoa: Pessoa) {

    if(!id){
        id = v4();
    }
    this.id = id;

    this.nameuser = nameuser;
    this.password = password;
    this.pessoa = pessoa;
    
    
 }


// método que obtém Id
getId(): string{
    return this.id
}

getName(): string{
    return this.nameuser
}

getSenha(): string{
    return this.password
}

getPessoa(): Pessoa{
    return this.pessoa
}


}


//beleza sobe