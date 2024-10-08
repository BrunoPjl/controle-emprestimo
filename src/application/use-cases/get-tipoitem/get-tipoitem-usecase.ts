import { TipoItemRepository } from "../../../domain/repository/tipo-item-repository";
import { GetTipoItemInput } from "./get-tipoitem-input";
import { GetTipoItemOutput } from "./get-tipoitem-output";

export class GetTipoItemUseCase{

    constructor(readonly tipoItemRepository: TipoItemRepository){}

    execute(input: GetTipoItemInput): GetTipoItemOutput[]{
        const listaDeItens = this.tipoItemRepository.getall();

        const output: GetTipoItemOutput[] = [];

        for(const itemdalista of listaDeItens){
            output.push(
                {
                   id: itemdalista.getId(),
                    name: itemdalista.getName()
                  

                }
            )
        }

        return output;
            
        

    }
}