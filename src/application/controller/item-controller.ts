import { ItemRepository } from "../../domain/repository/item-repository";
import { CreateItemUseCase } from "../use-cases/create-item/create-item-usecase";
import { DeleteItemUseCase } from "../use-cases/delete-item/delete-item-usecase";
import { UpdateItemUseCase } from "../use-cases/update-item/update-item-usecase";

export class ItemController{
    constructor(private readonly itemRepository: ItemRepository){}

    create(input: any){

        const createItemUseCase = new CreateItemUseCase(this.itemRepository);
        createItemUseCase.execute(input);


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