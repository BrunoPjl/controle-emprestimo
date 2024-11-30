import { EmprestimoRepository } from "./emprestimo-repository";
import { ItemRepository } from "./item-repository";
import { PessoaRepository } from "./pessoa-repository";
import { TipoItemRepository } from "./tipo-item-repository";
import { UsuarioRepository } from "./usuario-repository";

export interface RepositoryFactory {
    createItemRepository(): ItemRepository;
    createTipoItemRepository(): TipoItemRepository;
<<<<<<< HEAD
    createEmprestimoRepository():EmprestimoRepository;
    createPessoaRepository(): PessoaRepository;
    


=======
    createUserRepository(): UsuarioRepository;
>>>>>>> 9a07e9fa8cd02d7197e092e0a426752f9c286928
}