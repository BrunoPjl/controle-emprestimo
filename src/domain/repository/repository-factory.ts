import { ItemRepository } from "./item-repository";
import { TipoItemRepository } from "./tipo-item-repository";
import { UsuarioRepository } from "./usuario-repository";

export interface RepositoryFactory {
    createItemRepository(): ItemRepository
    createTipoItemRepository(): TipoItemRepository;
    createUserRepository(): UsuarioRepository;
}