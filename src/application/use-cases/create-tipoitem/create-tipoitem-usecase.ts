import { TipoItem } from "../../../domain/entity/TipoItem";
import { TipoItemRepository } from "../../../domain/repository/tipo-item-repository";
import { CreateTipoItemInput } from "./create-tipoitem-input";
import { CreateTipoItemOutput } from "./create-tipoitem-output";

export class CreateTipoItemUseCase{
    constructor(readonly tipoItemRepository: TipoItemRepository){}
    
   
execute(input: CreateTipoItemInput): CreateTipoItemOutput{
   

    const tipoitem = new TipoItem(input.name, input.id)

    this.tipoItemRepository.create(tipoitem);

    return {

    };

}
    
    }