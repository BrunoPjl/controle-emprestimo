
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { GetPersonInput } from "./get-person-input";
import { GetPersonOutput } from "./get-person-output";

export class GetPersonUseCase{

    constructor(readonly personReposytory: PessoaRepository){}

    
    execute(input: GetPersonInput): GetPersonOutput[]{
        const listaDeItens = this.personReposytory.getall();

        const output: GetPersonOutput[] = [];

        for(const itemdalista of listaDeItens){
            output.push(
                {
                    id: itemdalista.getId(),
                    name: itemdalista.getUserName()
                    }
            )
        }

        return output;
            
        

    }

}