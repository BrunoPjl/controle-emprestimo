import { TipoItemRepository } from "../../../domain/repository/tipo-item-repository";
import { UpdateTipoItemInput } from "./update-tipoitem-input";
import { UpdateTipoItemOutput } from "./update-tipoitem-output";

export class UpdateTipoItemUseCase{

    constructor(readonly tipoitemRepository: TipoItemRepository){}

        execute(input: UpdateTipoItemInput): UpdateTipoItemOutput{
            return{
                name:''
            }

        }

    

}