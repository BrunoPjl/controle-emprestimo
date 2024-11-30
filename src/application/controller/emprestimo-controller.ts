import { EmprestimoRepository } from "../../domain/repository/emprestimo-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateEmprestimoUseCase } from "../use-cases/create-emprestimo/create-emprestimo-usecase";
import { DeleteEmprestimoUseCase } from "../use-cases/delete-emprestimo/delete-emprestimo-usecase";
import { GetEmprestimoUseCase } from "../use-cases/get-emprestimo/get-emprestimo-usecase";
import { GetEmprestimosUseCase } from "../use-cases/get-emprestimos/get-emprestimos-usecase";
import { UpdateEmprestimoUseCase } from "../use-cases/update-emprestimo/update-emprestimo-usecase";


export class EmprestimoController{



     constructor(
        private repositoryFactory: RepositoryFactory
    ){}

    async getAll(input: any) {
        const getItems = new GetEmprestimosUseCase(this.repositoryFactory);
        return await getItems.execute(input);
    }

    create(input: any){

        const createEmprestimoUseCase = new CreateEmprestimoUseCase (this.repositoryFactory);
        createEmprestimoUseCase.execute(input);


    }
/*
    update(input: any){
        const updateEmprestimoUseCase = new UpdateEmprestimoUseCase(this.repositoryFactory);
        updateEmprestimoUseCase.execute(input);
    }

    delete(input: any){

        const deleteItemUseCase  = new DeleteEmprestimoUseCase(this.repositoryFactory);
        deleteItemUseCase.execute(input);

    }
*/
    

}