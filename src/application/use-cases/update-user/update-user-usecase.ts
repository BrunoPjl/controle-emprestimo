import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { UpdateUserInput } from "./update-user-input";
import { UpdateUserOutput } from "./update-user-output";

export class UpdateUserUseCase{

    constructor(readonly userRepository: UsuarioRepository){}

        execute(input: UpdateUserInput): UpdateUserOutput{
            return{
                name:''
            }

        }

    

}