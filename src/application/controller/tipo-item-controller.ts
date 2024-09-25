import { TipoItemRepository } from "../../domain/repository/tipo-item-repository";
import { CreateTipoItemUseCase } from "../use-cases/create-tipoitem/create-tipoitem-usecase";
import { DeleteTipoItemUseCase } from "../use-cases/delete-tipoitem /delete-tipoitem-usecase";
import { UpdateTipoItemUseCase } from "../use-cases/update-tipoitem/update-tipoitem-usecase";

export class TipoItemController{
    constructor(private readonly tipoitemRepository: TipoItemRepository){}

    create(input: any){

        const createTipoItemUseCase = new CreateTipoItemUseCase(this.tipoitemRepository);
        createTipoItemUseCase.execute(input);


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