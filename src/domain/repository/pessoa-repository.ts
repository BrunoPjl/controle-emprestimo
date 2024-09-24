import { Pessoa } from "../entity/Pesssoa";
export interface PessoaRepository{
    getall(): Pessoa[];
    getById(id: string): Pessoa;
    create(pessoa: Pessoa): void;
    update(pessoa: Pessoa): void;
}