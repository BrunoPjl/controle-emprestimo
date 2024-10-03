import { Pessoa } from "../../../domain/entity/Pesssoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { CreatePersonInput } from "./create-person-input";
import { CreatePersonOutput } from "./create-person-output";

export class CreatePersonUseCase{
constructor(readonly personRepository: PessoaRepository){}


execute(input: CreatePersonInput): CreatePersonOutput{
    const pessoa = new Pessoa(input.Id, input.name)
    this.personRepository.create(pessoa);

    return {};

}

}