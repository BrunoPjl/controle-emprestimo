import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { GetEmprestimoInput } from "../get-emprestimo/get-emprestimo-input";
import { GetEmprestimoOutput } from "../get-emprestimo/get-emprestimo-output";

export class CreateEmprestimoUseCase{
constructor(readonly emprestimoRepository: EmprestimoRepository){}

execute(input: GetEmprestimoInput): GetEmprestimoOutput{
    return{
        name:''
    }

}

}