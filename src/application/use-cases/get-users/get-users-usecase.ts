import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetUsersInput } from "./get-users-input";
import { GetUsersOutput } from "./get-users-output";

export class GetUseruseCase{

    constructor(readonly userReposytory: UsuarioRepository){}

    execute(input: GetUsersInput): GetUsersOutput{
        return{
            name:''
        }
    }
}