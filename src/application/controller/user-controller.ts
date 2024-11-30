
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../domain/repository/usuario-repository";
import { CreateUserUseCase } from "../use-cases/create-user/create-user-usecase";
import { DeleteUserUseCAse } from "../use-cases/delete-user/delete-user-usecase";
import { GetUseruseCase } from "../use-cases/get-user/get-user-usecase";
import { UpdateUserUseCase } from "../use-cases/update-user/update-user-usecase";


export class UserController{
    constructor(
        private repositoryFactory: RepositoryFactory
    ){}

    async getAll(input: any) {
        const getUser = new GetUseruseCase(this.repositoryFactory);
        return await getUser.execute(input);
    }

    /*
    create(input: any){

        const createUserUseCase = new CreateUserUseCase(this.userRepository);
        createUserUseCase.execute(input);


    }

    update(input: any){
        const updateUserUseCase = new UpdateUserUseCase(this.userRepository);
        updateUserUseCase.execute(input);
    }

    delete(input: any){

        const deleteUserUseCase  = new DeleteUserUseCAse(this.userRepository);
        deleteUserUseCase.execute(input);

    }*/

    

}