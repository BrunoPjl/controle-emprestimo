import { Pessoa } from "../../../domain/entity/Pesssoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";

export class PessoaRepositoryMemory implements PessoaRepository{
    
    private pessoas: Pessoa[];

    constructor()
    {
        
        this.pessoas = [

            new Pessoa('Bruno', 'cef9056d-b22f-4152-ad46-332875244183')
        ]
    }
    
    
    
    getall(): Pessoa[] {
        return this.pessoas;
    }
    getById(id: string): Pessoa {
        const pessoa = this.pessoas.find(valor => valor.getId() == id)
        if(!pessoa){
            throw new Error('pessoa not found')
        }

        return pessoa;
    }
    create(pessoa: Pessoa): void {
       this.pessoas.push(pessoa);
    }
    update(pessoa: Pessoa): void {
        throw new Error("Method not implemented.");
    }



}