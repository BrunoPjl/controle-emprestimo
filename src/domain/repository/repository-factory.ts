import { EmprestimoRepository } from "./emprestimo-repository";
import { ItemRepository } from "./item-repository";
import { PessoaRepository } from "./pessoa-repository";
import { TipoItemRepository } from "./tipo-item-repository";

export interface RepositoryFactory {
    createItemRepository(): ItemRepository;
    createTipoItemRepository(): TipoItemRepository;
    createEmprestimoRepository():EmprestimoRepository;
    createPessoaRepository(): PessoaRepository;
    


}