import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreatePersonUseCase } from "../use-cases/create-person/create-person-usecase";
import { DeletePersonUseCase } from "../use-cases/delete-person/delete-person-usecase";
import { GetPeopleUseCase } from "../use-cases/get-people/get-people-usecase";
import { GetPersonUseCase } from "../use-cases/get-person/get-person-usecase";
//import { DeletePersonUseCase, DeletePersonUseCAse } from "../use-cases/delete-person/delete-person-usecase";
import { UpdatePersonUseCase } from "../use-cases/update-person/update-person-usecase";

export class PersonController{

constructor(private repositoryFactory: RepositoryFactory){}

async getAll(input: any) {
    const getPerson = new GetPersonUseCase(this.repositoryFactory);
    return await getPerson.execute(input);
}

async getById(id: string) {
    try {
        const getPersonById = new GetPersonUseCase(this.repositoryFactory);
        return await getPersonById.execute({id});
    } catch (e: any) {
        return {
            message: e.message
        }
    }
}



async create(input: any){
    try {
        const createPersonUseCase = new CreatePersonUseCase(this.repositoryFactory);
        return await createPersonUseCase.execute(input);
    } catch (e: any) {
        return {
            message: e.message
        }
    }
}
/*
update(input: any){

    const updatePersonUseCase = new UpdatePersonUseCase(this.personRepository);
    updatePersonUseCase.execute(input);
}

delete(input: any){

    const deletePersonUseCase  = new DeletePersonUseCase(this.personRepository);
    deletePersonUseCase.execute(input);
}
*/


}