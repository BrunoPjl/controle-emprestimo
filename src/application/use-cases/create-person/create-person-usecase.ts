import { ItemRepository } from "../../../domain/repository/item-repository";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { CreatePersonInput } from "./create-person-input";
import { CreatePersonOutput } from "./create-person-output";

export class CreatePersonUseCase{
constructor(readonly personRepository: PessoaRepository){}

execute(input: CreatePersonInput): CreatePersonOutput{
    return{
        name:''
    }

}
}