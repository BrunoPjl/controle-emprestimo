
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetPersonInput } from "./get-person-input";
import { GetPersonOutput } from "./get-person-output";

export class GetPersonUseCase{
    
    personRepository:PessoaRepository
    constructor(readonly repositoryFactory: RepositoryFactory
    ){
        this.personRepository = this.repositoryFactory.createPessoaRepository()
    }

    
  async  execute(input: GetPersonInput): Promise<GetPersonOutput[]>{
        const listaDePessoas = await this.personRepository.getAll();

        const output: GetPersonOutput[] = [];

        for(const pessoaDalista of listaDePessoas){
            output.push(
                {
                    id: pessoaDalista.getId(),
                    name: pessoaDalista.getUserName(),
                    documento: pessoaDalista.getDocumento()
                    }
            )
        }

        return output;
            
        

    }

}