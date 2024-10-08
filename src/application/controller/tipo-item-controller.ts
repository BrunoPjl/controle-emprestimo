import { TipoItemRepository } from "../../domain/repository/tipo-item-repository";
import { CreateTipoItemUseCase } from "../use-cases/create-tipoitem/create-tipoitem-usecase";
import { DeleteTipoItemUseCase } from "../use-cases/delete-tipoitem /delete-tipoitem-usecase";
import { GetTipoItensUseCase } from "../use-cases/get-tipoitens/get-tipoitens-usecase";
import { UpdateTipoItemUseCase } from "../use-cases/update-tipoitem/update-tipoitem-usecase";

export class TipoItemController{
    constructor(private readonly tipoitemRepository: TipoItemRepository){}

    getAll(input : any){

        const getTipoItens = new GetTipoItensUseCase(this.tipoitemRepository);
        return getTipoItens.execute(input);
    
    }

    create(input: any){

        const createTipoItemUseCase = new CreateTipoItemUseCase(this.tipoitemRepository);
        return createTipoItemUseCase.execute(input);


    }
    update(input: any){
        const updateTipoItemUseCase = new UpdateTipoItemUseCase(this.tipoitemRepository);
        updateTipoItemUseCase.execute(input);
    }

    delete(input: any){

        const deleteTipoItemUseCase = new DeleteTipoItemUseCase(this.tipoitemRepository);
        deleteTipoItemUseCase.execute(input);
    }

    

}