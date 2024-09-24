import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetItensInput } from "./get-itens-input";
import { GetItensOutput } from "../get-item/get-item-output";

export class GetItensUseCase{

    constructor(readonly itemRepository: ItemRepository){}

        execute(input: GetItensInput): GetItensOutput{
            const listaDeItens = this.itemRepository.getall();

            const output: GetItensOutput[] = [];

            for(const itemdalista of listaDeItens){
               /* output.push(
                    {
                       id: itemdalista.getId(),
                        name: itemdalista.getName()
                        tipoItem:{
                            id: itemdalista.getTipoItem().getId(),
                            name: itemdalista.getTipoItem().getName()
                        }

                    }
                )*/
            }

            return{
                name:''
            }

        }

    

}