import { ItemRepository } from "../../../domain/repository/item-repository";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { DeleteUserInput } from "./delete-user-input";
import { DeleteUserOutput } from "./delete-user-output";

export class DeleteUserUseCAse{
constructor(readonly userRepository: UsuarioRepository){}

execute(input: DeleteUserInput): DeleteUserOutput{
    return{
        name:''
    }

}

}