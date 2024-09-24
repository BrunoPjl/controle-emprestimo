import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { GetPeopleInput } from "../get-people/get-people-input";
import { GetPersonOutput } from "./get-person-output";

export class GetPersonUseCase{

    constructor(readonly personReposytory: PessoaRepository){}

    execute(input: GetPeopleInput): GetPersonOutput{
        return{
            name:''
        }
    }
}