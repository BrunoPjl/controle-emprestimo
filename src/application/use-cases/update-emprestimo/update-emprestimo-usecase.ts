import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { UpdateEmprestimoInput } from "./update-emprestimo-input";
import { UpdateEmprestimomOutput } from "./update-emprestimo-output";

export class UpdateEmprestimoUseCase{

    constructor(readonly emprestimoRepository: EmprestimoRepository){}

        execute(input: UpdateEmprestimoInput): UpdateEmprestimomOutput{
            return{
                name:''
            }

        }

    

}