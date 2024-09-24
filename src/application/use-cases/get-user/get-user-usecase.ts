import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetUserInput } from "./get-user-input";
import { GetUserOutput } from "./get-user-output";

export class GetUseruseCase{

    constructor(readonly userReposytory: UsuarioRepository){}

    execute(input: GetUserInput): GetUserOutput{
        return{
            name:''
        }
    }
}