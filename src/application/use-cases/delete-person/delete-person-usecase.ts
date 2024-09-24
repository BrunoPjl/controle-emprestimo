import { ItemRepository } from "../../../domain/repository/item-repository";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { DeletePersonInput } from "./delete-person-input";
import { DeletePersonOutput } from "./delete-person-output";

export class DeletePersonUseCase{
constructor(readonly personRepository: PessoaRepository){}

execute(input: DeletePersonInput): DeletePersonOutput{
    return{
        name:''
    }

}

}