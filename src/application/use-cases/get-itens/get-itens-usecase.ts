import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetItensInput } from "./get-itens-input";
import { GetItensOutput } from "../get-itens/get-itens-output";

export class GetItensUseCase{
    constructor(readonly itemRepository: ItemRepository){}

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