import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetItensInput } from "./get-itens-input";
import { GetItensOutput } from "../get-itens/get-itens-output";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";

export class GetItensUseCase{
    itemRepository: ItemRepository;
    constructor(readonly repositoryFactory: RepositoryFactory
    ){
        this.itemRepository = this.repositoryFactory.createItemRepository()
    }

    async execute(input: GetItensInput): Promise<GetItensOutput[]> {
        const listaDeItems = await this.itemRepository.getAll();
        
        const output: GetItensOutput[] = [];

        for (const itemdalista of listaDeItems){
            output.push(
                {
                    id: itemdalista.getId(),
                    name: itemdalista.getName(),
                    tipoItem: {
                        id: itemdalista.getTipoItem().getId(),
                        name: itemdalista.getTipoItem().getName()
                    }
                }
            )
        }

        return output;
    }
}