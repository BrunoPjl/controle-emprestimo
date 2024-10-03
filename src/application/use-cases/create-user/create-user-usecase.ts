
import { Usuario } from "../../../domain/entity/Usuario";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { CreateUserInput } from "./create-user-input";
import { CreateUserOutput } from "./create-user-output";

export class CreateUserUseCase{
constructor(readonly userRepository: UsuarioRepository){}

execute(input: CreateUserInput): CreateUserOutput{
    const user = this.userRepository.getById(input.userId)
    const usuario = new Usuario(user.getName(),user.getPessoa(),user.getSenha(),user.getId())
    this.userRepository.create(usuario);
    return {};

}

}