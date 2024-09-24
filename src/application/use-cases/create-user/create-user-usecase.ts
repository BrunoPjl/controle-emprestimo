
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { CreateUserInput } from "./create-user-input";
import { CreateUserOutput } from "./create-user-output";
export class CreateUserUseCase{
constructor(readonly userRepository: UsuarioRepository){}

execute(input: CreateUserInput): CreateUserOutput{
    return{
        name:''
    }

}

}