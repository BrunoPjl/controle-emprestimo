import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../../domain/repository/tipo-item-repository";
import { GetTipoItemInput } from "./get-tipoitem-input";
import { GetTipoItemOutput } from "./get-tipoitem-output";

export class GetTipoItemUseCase{

    tipoItemRepository: TipoItemRepository

    constructor(readonly repositoryFactory: RepositoryFactory
    ){
        this.tipoItemRepository = this.repositoryFactory.createTipoItemRepository();
    }

    async execute(input: GetTipoItemInput): Promise <GetTipoItemOutput[]>{
        const listaDeItens = await this.tipoItemRepository.getAll();

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