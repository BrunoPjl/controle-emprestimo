import { ItemRepository } from "../../domain/repository/item-repository";
import { TipoItemRepository } from "../../domain/repository/tipo-item-repository";
import { CreateItemUseCase } from "../use-cases/create-item/create-item-usecase";
import { DeleteItemUseCase } from "../use-cases/delete-item/delete-item-usecase";
import { GetItensUseCase } from "../use-cases/get-itens/get-itens-usecase";
import { UpdateItemUseCase } from "../use-cases/update-item/update-item-usecase";

export class ItemController{
    constructor(private readonly itemRepository: ItemRepository,
        private readonly tipoItemRepository: TipoItemRepository
    ){}

getAll(input : any){

    const getItens = new GetItensUseCase(this.itemRepository);
    return getItens.execute(input);

}


    create(input: any){

        const createItemUseCase = new CreateItemUseCase(this.itemRepository, this.tipoItemRepository);
       return  createItemUseCase.execute(input);


    }

    update(input: any){
        const updateItemUseCase = new UpdateItemUseCase(this.itemRepository);
        updateItemUseCase.execute(input);
    }

    delete(input: any){

        const deleteItemUseCase  = new DeleteItemUseCase(this.itemRepository);
        deleteItemUseCase.execute(input);

    }

    

}