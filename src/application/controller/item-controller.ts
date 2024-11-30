import { ItemRepository } from "../../domain/repository/item-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../domain/repository/tipo-item-repository";
import { CreateItemUseCase } from "../use-cases/create-item/create-item-usecase";
import { DeleteItemUseCase } from "../use-cases/delete-item/delete-item-usecase";
import { GetItensUseCase } from "../use-cases/get-itens/get-itens-usecase";
import { UpdateItemInput } from "../use-cases/update-item/update-item-input";
import { UpdateItemUseCase } from "../use-cases/update-item/update-item-usecase";






export class ItemController{
    constructor(
        private repositoryFactory: RepositoryFactory
    ){}

    async getAll(input: any) {
        const getItems = new GetItensUseCase(this.repositoryFactory);
        return await getItems.execute(input);
    }

    async getById(id: string) {
        try {
            const getItem = new GetItensUseCase(this.repositoryFactory);
            return await getItem.execute({id});
        } catch (e: any) {
            return {
                message: e.message
            }
        }
    }

    async create(input: any){
        try {
            const createItemUseCase = new CreateItemUseCase(
                this.repositoryFactory
            );
            return await createItemUseCase.execute(input);
        } catch (e: any) {
            return {
                message: e.message
            }
        }
    }

    /*
    update(input: any){
        const updateItemUseCase = new UpdateItemUseCase(this.repositoryFactory);
        updateItemUseCase.execute(input);
    }

    

    delete(id: string) {
        try {
            const deleteItem = new DeleteItemUseCase(this.itemRepository);
            return deleteItem.execute({id});
        } catch (e: any) {
            return {
                message: e.message
            }
        }
        
    }*/

    

}