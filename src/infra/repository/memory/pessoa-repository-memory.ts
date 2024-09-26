import { Pessoa } from "../../../domain/entity/Pesssoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";

export class PessoaRepositoryMemory implements PessoaRepository{
    
    private pessoas: Pessoa[];

    constructor()
    {
        const pessoa = new Pessoa('Funcionários' ,'33b25da0-efdb-4db8-b855-0670cd818442')
        this.pessoas = [

            new Pessoa('Bruno', 'cef9056d-b22f-4152-ad46-332875244183')
        ]
    }
    
    
    
    getall(): Pessoa[] {
        return this.pessoas;
    }
    getById(id: string): Pessoa {
        throw new Error("Method not implemented.");
    }
    create(pessoa: Pessoa): void {
        throw new Error("Method not implemented.");
    }
    update(pessoa: Pessoa): void {
        throw new Error("Method not implemented.");
    }



}