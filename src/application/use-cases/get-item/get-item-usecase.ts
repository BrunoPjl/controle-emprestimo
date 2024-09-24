import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetItensInput } from "./get-item-input";
import { GetItensOutput } from "./get-item-output";

export class GetItensUseCase{

    constructor(readonly itemRepository: ItemRepository){}

        execute(input: GetItensInput): GetItensOutput{
            return{
                name:''
            }

        }

    

}