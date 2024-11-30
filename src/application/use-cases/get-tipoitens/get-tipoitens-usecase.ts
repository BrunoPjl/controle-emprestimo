import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../../domain/repository/tipo-item-repository";
import { GetTipoItensInput } from "./get-tipoitens-input";
import { GetTipoItensOutput } from "./get-tipoitens-output";

export class GetTipoItensUseCase{

    tipoItensRepository: TipoItemRepository

    constructor(readonly repositoryFactory: RepositoryFactory){
        this.tipoItensRepository = repositoryFactory.createTipoItemRepository()
    }

    async execute(input: GetTipoItensInput): Promise <GetTipoItensOutput[]>{
        const listaDeItens = await this.tipoItensRepository.getAll();

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