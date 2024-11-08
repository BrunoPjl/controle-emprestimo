import { ItemRepository } from "../../domain/repository/item-repository";
import { TipoItemRepository } from "../../domain/repository/tipo-item-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import ItemRepositoryDatabase from "../repository/database/item-repository-database";
import { TipoItemRepositoryDatabase } from "../repository/database/item-type-repository-database";
import { Connection } from "./connection";

export class DatabaseRepositoryFactory implements RepositoryFactory{
    constructor(private connection: Connection) {
    }
    createItemRepository(): ItemRepository {
        return new ItemRepositoryDatabase(this.connection);
    }
    createItemTypeRepository(): TipoItemRepository {
        return new TipoItemRepositoryDatabase(this.connection);
    }

}