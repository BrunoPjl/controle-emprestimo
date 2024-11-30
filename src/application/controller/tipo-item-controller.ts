import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../domain/repository/tipo-item-repository";
import { CreateTipoItemUseCase } from "../use-cases/create-tipoitem/create-tipoitem-usecase";
import { GetTipoItemUseCase } from "../use-cases/get-tipoitem/get-tipoitem-usecase";
import { GetTipoItensUseCase } from "../use-cases/get-tipoitens/get-tipoitens-usecase";
import { UpdateTipoItemUseCase } from "../use-cases/update-tipoitem/update-tipoitem-usecase";

export class TipoItemController{
    constructor(
        private repositoryFactory: RepositoryFactory
    ){}

    async getAll(input: any) {
        const getTipoItens = new GetTipoItensUseCase(this.repositoryFactory);
        return await getTipoItens.execute(input);
    }
/*
    create(input: any){

        const createTipoItemUseCase = new CreateTipoItemUseCase(this.tipoitemRepository);
        return createTipoItemUseCase.execute(input);


    }
    update(input: any){
        const updateTipoItemUseCase = new UpdateTipoItemUseCase(this.tipoitemRepository);
        updateTipoItemUseCase.execute(input);
    }

   
*/
    

}