import { Emprestimo } from "../../../domain/entity/Emprestimo";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";

export class EmprestimoRepositoryMemory implements EmprestimoRepository{ 
    
    getall(): Emprestimo[] {
    throw new Error("Method not implemented.");
}
getById(id: string): Emprestimo {
    throw new Error("Method not implemented.");
}
create(emprestimo: Emprestimo): void {
    throw new Error("Method not implemented.");
}
update(emprestimo: Emprestimo): void {
    throw new Error("Method not implemented.");
}}

  