import { Emprestimo } from "../entity/Emprestimo";

export interface EmprestimoRepository{
    getAll():  Promise <Emprestimo[]>;
    getById(id: string): Promise <Emprestimo>;
    create(emprestimo: Emprestimo): Promise <void>;
    update(emprestimo: Emprestimo): Promise <void>;
}