import { ItemRepository } from "../../domain/repository/item-repository";
import { TipoItemRepository } from "../../domain/repository/tipo-item-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import ItemRepositoryDatabase from "../repository/database/item-repository-database";
import { TipoItemRepositoryDatabase } from "../repository/database/tipo-item-repository-database";
import { Connection } from "./connection";
import { EmprestimoRepository } from "../../domain/repository/emprestimo-repository";
import EmprestimoRepositoryDatabase from "../repository/database/empresimo-repository-database";
import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import PessoaRepositoryDatabase from "../repository/database/pessoa-repository-database";

export class DatabaseRepositoryFactory implements RepositoryFactory{
    constructor(private connection: Connection) {
    }
    createPessoaRepository(): PessoaRepository {
        return new PessoaRepositoryDatabase(this.connection);
    }
    
    createItemRepository(): ItemRepository {
        return new ItemRepositoryDatabase(this.connection);
    }
    createTipoItemRepository(): TipoItemRepository {
        return new TipoItemRepositoryDatabase(this.connection);
    }
    createEmprestimoRepository(): EmprestimoRepository {
        return new EmprestimoRepositoryDatabase(this.connection);
    }

}