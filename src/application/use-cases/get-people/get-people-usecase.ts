import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { GetPeopleInput } from "./get-people-input";
import { GetPeopleOutput } from "./get-people-output";

export class GetPeopleUseCase{

    constructor(readonly pessoaRepository: PessoaRepository){}

    execute(input: GetPeopleInput): GetPeopleOutput{
        return {
            name: ''
        }
    }
}