import { Pessoa } from "../../../domain/entity/Pesssoa";
import { Usuario } from "../../../domain/entity/Usuario";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { Connection } from "../../database/connection";

export default class UsuarioRepositoryDatabase implements UsuarioRepository{

    constructor(private connection: Connection) {
    }

    async getAll(): Promise<Usuario[]> {

        const output = []
        const UsuarioData = await this.connection.execute(` select usuarios.id, usuarios.nome_usuario, usuarios.senha, pessoas.id, pessoas.nome, pessoas.documento 
from usuarios LEFT join pessoas on usuarios.pessoas_id = pessoas.id`);

        for (const userData of UsuarioData) {

            const pessoa = new Pessoa(
                userData.id,
                userData.nome,
                userData.documento
            )

            const usuario = new Usuario(
                userData.id,
                userData.nome_usuario,
                userData.senha,
                pessoa
                
                
                
                )

            output.push(usuario)
        }

        return output;
    }
    getById(id: string): Usuario {
        throw new Error("Method not implemented.");
    }
    getByUsername(nameuser: string): Usuario {
        throw new Error("Method not implemented.");
    }
    create(usuario: Usuario): void {
        throw new Error("Method not implemented.");
    }
    update(usuario: Usuario): void {
        throw new Error("Method not implemented.");
    }
}