import { Pessoa } from "../../../domain/entity/Pesssoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { Connection } from "../../database/connection";

export default class PessoaRepositoryDatabase implements PessoaRepository {

    constructor(private connection: Connection) {
    }
    
    async getAll(): Promise<Pessoa[]> {
        const output = []
        const PessoaData = await this.connection.execute(`
            select * from pessoas`);
        for(const pessoaData of PessoaData){

            const pessoa = new Pessoa(
                pessoaData.id,
                pessoaData.nome,
                pessoaData.documento 
                )

            output.push(pessoa)
        }
           

        return output;
    }

    async getById(id: string): Promise<Pessoa> {
        const [ pessoaData ] = await this.connection.execute(`
            select *
            from pessoas
            where id = $1`,
            [id]
        );

        if (!pessoaData) {
            throw new Error('Item não encontrado');
        }

        const pessoa = new Pessoa(
            pessoaData.id,
            pessoaData.nome,
            pessoaData.documento 
            )

        return pessoa;
    }
    async create(pessoa: Pessoa): Promise<void> {
        await this.connection.execute(`
            insert into pessoas(id, nome, documento)
            values ($1, $2, $3)`,
            [pessoa.id, pessoa.username, pessoa.documento]);        
    }

    async update(pessoa: Pessoa): Promise<void> {
        await this.connection.execute(`
            update pessoas set
            nome = $1,
            documento = $2
            where id = $3
            `,
            [pessoa.username, pessoa.documento, pessoa.id]);
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
