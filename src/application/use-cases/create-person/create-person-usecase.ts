import { Pessoa } from "../../../domain/entity/Pesssoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { CreatePersonInput } from "./create-person-input";
import { CreatePersonOutput } from "./create-person-output";

export class CreatePersonUseCase{
    private pessoaRepository: PessoaRepository;

constructor(private repositoryFactory: RepositoryFactory){
    this.pessoaRepository = repositoryFactory.createPessoaRepository();
}


async execute(input: CreatePersonInput): Promise <CreatePersonOutput> {
    if(!input.name){
        throw new Error('Insira um nome!')
    }
    if(!input.documento){
        throw new Error('Insira um documento valido!')
    }
    const pessoa = new Pessoa(input.name, input.documento, input.id)
    await this.pessoaRepository.create(pessoa)
    return {}
    

}

}