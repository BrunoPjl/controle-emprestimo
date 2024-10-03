import { TipoItemRepository } from "../../../domain/repository/tipo-item-repository";
import { GetTipoItensInput } from "./get-tipoitens-input";
import { GetTipoItensOutput } from "./get-tipoitens-output";

export class GetTipoItensUseCase{

    constructor(readonly tipoItensRepository: TipoItemRepository){}

    execute(input: GetTipoItensInput): GetTipoItensOutput[]{
        const listaDeItens = this.tipoItensRepository.getall();

        const output: GetTipoItensOutput[] = [];

        for(const tipoitemdalista of listaDeItens){
            output.push(
                {
                  
                    
                        id: tipoitemdalista.getId(),
                        name: tipoitemdalista.getName()
                    

                }
            )
        }

        return output;
            
        

    }
}