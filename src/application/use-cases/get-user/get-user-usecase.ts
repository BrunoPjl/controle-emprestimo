import { Usuario } from "../../../domain/entity/Usuario";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetUserInput } from "./get-user-input";
import { GetUserOutput } from "./get-user-output";

export class GetUseruseCase{

    constructor(readonly userReposytory: UsuarioRepository){}

    execute(input: GetUserInput): GetUserOutput[]{
        const listaDeItens = this.userReposytory.getall();

        const output: GetUserOutput[] = [];

        for(const itemdalista of listaDeItens){
            output.push(
                {
                   nameuser: itemdalista.getName(),
                   id: itemdalista.getId(),
                   senha: itemdalista.getSenha(),
                   pessoa:{
                    username: itemdalista.getPessoa().getUserName(),
                    id: itemdalista.getPessoa().getId()
                   }

                }
            )
        }

        return output;
            
        

    }
}