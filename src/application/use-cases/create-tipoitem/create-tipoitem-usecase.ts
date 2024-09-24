import { TipoItemRepository } from "../../../domain/repository/tipo-item-repository";
import { CreateTipoItemInput } from "./create-tipoitem-input";
import { CreateTipoItemOutput } from "./create-tipoitem-output";

export class CreateTipoItemUseCase{
    constructor(readonly createTipoItemRepository: TipoItemRepository){}
    
    execute(input: CreateTipoItemInput): CreateTipoItemOutput{
        return{
            name:''
        }
    
    }
    
    }