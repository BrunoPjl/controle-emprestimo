import { Item } from "../../../domain/entity/Item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../../domain/repository/tipo-item-repository";
import { CreateItemInput } from "./create-item-input";
import { CreateItemOutput } from "./create-item-output";

export class CreateItemUseCase {
    private itemRepository: ItemRepository;
    private itemTypeRepository: TipoItemRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.itemRepository = repositoryFactory.createItemRepository();
        this.itemTypeRepository = repositoryFactory.createItemTypeRepository();
    }
    
    async execute(input: CreateItemInput) {
        if (!input.name) {
            throw new Error('Nome do item não informado');
        }
        if (!input.tipoItemId) {
            throw new Error('Tipo do item não informado');
        }

        const itemType = await this.itemTypeRepository.getById(input.tipoItemId);

        const item = new Item(input.name, itemType);

        await this.itemRepository.create(item);

        return {};


    }
}