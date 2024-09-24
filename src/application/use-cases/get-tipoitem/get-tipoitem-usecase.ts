
import { TipoItemRepository } from "../../../domain/repository/tipo-item-repository";
import { GetTipoItemInput } from "./get-tipoitem-input";
import { GetTipoItemOutput } from "./get-tipoitem-output";

export class GetTipoItemUseCase{

    constructor(readonly tipoItemRepository: TipoItemRepository){}

    execute(input: GetTipoItemInput): GetTipoItemOutput{
        return {
            name: ''
        }
    }
}