import { TipoItemRepository } from "../../../domain/repository/tipo-item-repository";
import { DeleteTipoItemInput } from "./delete-tipoitem-input";
import { DeleteTipoItemOutput } from "./delete-tipoitem-output";

export class DeleteTipoItemUseCase{
constructor(readonly tipoitemRepository: TipoItemRepository){}
execute(input: DeleteTipoItemInput): DeleteTipoItemOutput{
    return{
        name:''
    }

}

}