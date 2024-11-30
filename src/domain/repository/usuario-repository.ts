import { Usuario } from "../entity/Usuario";

export interface UsuarioRepository{
    getAll(): Promise <Usuario[]>;
    getById(id: string): Usuario;
    getByUsername(nameuser: string): Usuario;
    create(usuario: Usuario): void;
    update(usuario: Usuario): void;
}
