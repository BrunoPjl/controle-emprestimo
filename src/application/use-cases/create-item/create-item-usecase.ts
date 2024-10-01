import { Item } from "../../../domain/entity/Item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { TipoItemRepository } from "../../../domain/repository/tipo-item-repository";
import { CreateItemInput } from "./create-item-input";
import { CreateItemOutput } from "./create-item-output";

export class CreateItemUseCase{
constructor(readonly itemRepository: ItemRepository,
    readonly tipoItemRepository: TipoItemRepository
){}

execute(input: CreateItemInput): CreateItemOutput{
    const tipoItem = this.tipoItemRepository.getById(input.tipoItemId)

    const item = new Item(tipoItem, input.name)

    this.itemRepository.create(item);

    return {};

}

}