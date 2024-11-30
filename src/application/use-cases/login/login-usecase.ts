import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { LoginUseCaseInput } from "./login-usecase-input";
import { LoginUseCaseOutput } from "./login-usecase-output";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class LoginUseCase {

    private userRepository: UsuarioRepository;

    constructor(readonly repositoryFactory: RepositoryFactory){
        this.userRepository = repositoryFactory.createUserRepository();
    }

  /*   async execute(input: LoginUseCaseInput): Promise<LoginUseCaseOutput> {
        const user = await this.userRepository.getByUsername(input.username);
    //    const isValidPassword = await compare(input.password, user.password);
        if (!isValidPassword) {
            throw new Error("Senha Inválida");
        }
        const token = sign({
           // id: user.id,
            username: input.username,
           // password: user.password
        }, 'teste');
        return {
            token
        }

    }*/
}