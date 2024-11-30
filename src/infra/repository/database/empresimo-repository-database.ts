
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
                emprestimoData.id,
                emprestimoData.username,
                emprestimoData.documento

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
            emprestimoData.id,
            emprestimoData.username,
            emprestimoData.documento
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


    async create(emprestimo: Emprestimo): Promise<void> {
        await this.connection.execute(`
            insert into emprestimos(id,data_emprestimo, data_devolucao,pessoas_id ,)
            values ($1, $2, $3)`,
            [emprestimo.id,emprestimo.dataemprestimo,emprestimo.datadevolucao, emprestimo.getItem]);        
    }    
    



/*
 


  
  */

/*    update(emprestimo: Emprestimo): void {
    throw new Error("Method not implemented.");
    }
*/
   
}
