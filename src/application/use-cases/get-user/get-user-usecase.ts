import { Usuario } from "../../../domain/entity/Usuario";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetUserInput } from "./get-user-input";
import { GetUserOutput } from "./get-user-output";

export class GetUseruseCase{

 userReposytory: UsuarioRepository;

   constructor(readonly repositoryFactory: RepositoryFactory
    ){
        this.userReposytory = this.repositoryFactory.createUsuarioRepository()
    }

   async execute(input: GetUserInput): Promise<GetUserOutput[]>{
        const listaDeItens = await  this.userReposytory.getAll();

        const output: GetUserOutput[] = [];

        for(const itemdalista of listaDeItens){
            output.push(
                {
                   nameuser: itemdalista.getName(),
                   id: itemdalista.getId(),
                   password: itemdalista.getSenha(),
                   pessoa:{
                    id: itemdalista.getPessoa().getId(),
                    name: itemdalista.getPessoa().getUserName(),
                    documento: itemdalista.getPessoa().getDocumento()
                   }

                }
            )
        }

        return output;
            
        

    }
}