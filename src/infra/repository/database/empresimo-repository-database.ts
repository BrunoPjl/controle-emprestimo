
import { Emprestimo } from "../../../domain/entity/Emprestimo";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { Item } from "../../../domain/entity/Item";
import { TipoItem } from "../../../domain/entity/TipoItem";
import { Pessoa } from "../../../domain/entity/Pesssoa";
import { Connection } from "../../database/connection";
import { Usuario } from "../../../domain/entity/Usuario";



export default class EmprestimoRepositoryDatabase implements EmprestimoRepository {

    constructor(private connection: Connection) {
    }

    async getAll(): Promise<Emprestimo[]> {
        const output = []
        const EmprestimosData = await this.connection.execute(`
            select e.id, i.nome, ti.id as tipo_item_id, ti.nome as nome_tipoitem
            from itens i 
            left join tipos_item ti on i.tipo_item_id = ti.id`);

        for (const emprestimoData of EmprestimosData) {

            const tipoItem = new TipoItem(
                emprestimoData.nome_tipoitem,
                emprestimoData.tipo_item_id
            )

            const item = new Item(
                emprestimoData.nome,
                tipoItem,
                emprestimoData.id
            )

            const pessoa = new Pessoa(
                emprestimoData.username,

            )

            const usuario = new Usuario(
                emprestimoData.nameuser,
                emprestimoData.senha,
                emprestimoData.pessoa
            )

            const emprestimo = new Emprestimo(
                emprestimoData.usuario,
                emprestimoData.pessoa,
                emprestimoData.item,
                emprestimoData.dataemprestimo,
                emprestimoData.datadevolucao
            )





            output.push(emprestimo)
        }

        return output;
    }

    async getById(id: string): Promise<Emprestimo> {
        const [ emprestimoData ] = await this.connection.execute(`
            select i.id, i.nome, ti.id as tipo_item_id, ti.nome as nome_tipoitem
            from itens i 
            left join tipos_item ti on i.tipo_item_id = ti.id
            where i.id = $1`,
            [id]
        );

        if (!emprestimoData) {
            throw new Error('emprestimo não encontrado');
        }

        const tipoItem = new TipoItem(
            emprestimoData.nome_tipoitem,
            emprestimoData.tipo_item_id
        )

        const item = new Item(
            emprestimoData.nome,
            tipoItem,
            emprestimoData.id
        )

        const pessoa = new Pessoa(
            emprestimoData.username,

        )

        const usuario = new Usuario(
            emprestimoData.nameuser,
            emprestimoData.senha,
            emprestimoData.pessoa
        )

        const emprestimo = new Emprestimo(
            emprestimoData.usuario,
            emprestimoData.pessoa,
            emprestimoData.item,
            emprestimoData.dataemprestimo,
            emprestimoData.datadevolucao
        )
        return emprestimo;
    }


    create(emprestimo: Emprestimo): void {
    throw new Error("Method not implemented.");
    }      
    update(emprestimo: Emprestimo): void {
    throw new Error("Method not implemented.");
    }

   
}
