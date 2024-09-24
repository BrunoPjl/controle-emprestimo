import { v4 }from 'uuid';
import { Pessoa } from './Pesssoa';


export class Usuario{

    // declaração fora do construtor
    private nameuser: string;
    private id: string;
    private senha: string
    private pessoa: Pessoa;
    
 // método que instancia objeto quando chamado
 // ? pode ser nulo ou não passado
 constructor( nameuser: string, pessoa: Pessoa, senha: string,id?: string  ){

    this.nameuser = nameuser;
    this.pessoa = pessoa;
    this.senha = senha;
    if(!id){
        id = v4();
    }
    this.id = id;
 }
// método que obtém nome 
 getName(): string{
    return this.nameuser
}
// método que obtém Id
getId(): string{
    return this.id
}

getPessoa(): Pessoa{
    return this.pessoa
}
getSenha(): string{
    return this.senha
}

}

//beleza sobe