import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { DeleteEmprestimoInput } from "./delete-emprestimo-input";
import { DeleteEmprestimoOutput } from "./delete-emprestimo-output";

export class DeleteEmprestimoUseCase{
constructor(readonly emprestimoRepository: EmprestimoRepository){}

execute(input:DeleteEmprestimoInput): DeleteEmprestimoOutput{
    return{
        name:''
    }

}

}