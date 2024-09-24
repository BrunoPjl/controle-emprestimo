import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { GetEmprestimosInput } from "../get-emprestimos/get-emprestimos-input";
import { GetEmprestimosOutput } from "../get-emprestimos/get-emprestimos-output";

export class GetEmprestimoUseCase{

    constructor(readonly emprestimoRepository: EmprestimoRepository){}

    execute(input: GetEmprestimosInput): GetEmprestimosOutput{
        return {
            name: ''
        }
    }
}