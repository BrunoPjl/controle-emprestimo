import { Emprestimo } from "../entity/Emprestimo";

export interface EmprestimoRepository{
    getall(): Emprestimo[];
    getById(id: string): Emprestimo;
    create(emprestimo: Emprestimo): void;
    update(emprestimo: Emprestimo): void;
}//beleza sobe