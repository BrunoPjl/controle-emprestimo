import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { UpdatePersonInput } from "./update-person-input";
import { UpdatePersonsOutput } from "./update-person-output";



export class UpdatePersonUseCase{

    constructor(readonly personRepository: PessoaRepository){}

        execute(input: UpdatePersonInput): UpdatePersonsOutput{
            return{
                name:''
            }

        }

    

}