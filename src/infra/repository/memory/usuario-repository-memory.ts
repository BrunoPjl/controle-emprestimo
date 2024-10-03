import { Pessoa } from "../../../domain/entity/Pesssoa";
import { Usuario } from "../../../domain/entity/Usuario";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";

export class UsuarioRepositoryMemory implements UsuarioRepository{

    private usuario: Usuario[];

    constructor()
    {
        const pessoa1 = new Pessoa('Bruno','b0749a42-bb15-4620-b701-b2347fbf7c9a')
        this.usuario = [

            new Usuario( 'Bruno',  pessoa1, '03142ea5-b2ba-45e5-ac94-b8a044999389'),
            new Usuario( 'edinei',  pessoa1, '8d26985b-d03f-459f-92fc-a397c325f55a'),
        ]
    }

    getall(): Usuario[] {
        return this.usuario;
    }
    getById(id: string): Usuario {
        const usuario = this.usuario.find(valor => valor.getId() == id)
        if(!usuario){
            throw new Error('usuario not found')
        }

        return usuario;
    }
    getByUsername(nameuser: string): Usuario {
        throw new Error("Method not implemented.");
    }
    create(usuario: Usuario): void {
        this.usuario.push(usuario);
    }
    update(usuario: Usuario): void {
        throw new Error("Method not implemented.");
    }

    

}