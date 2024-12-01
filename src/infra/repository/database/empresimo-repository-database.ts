
import { Emprestimo } from "../../../domain/entity/Emprestimo";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { Item } from "../../../domain/entity/Item";
import { TipoItem } from "../../../domain/entity/TipoItem";
import { Pessoa } from "../../../domain/entity/Pesssoa";
import { Connection } from "../../database/connection";
import { Usuario } from "../../../domain/entity/Usuario";
import { ItemEPI } from "../../../domain/entity/value-object/item-epi";



export default class EmprestimoRepositoryDatabase implements EmprestimoRepository {

    constructor(private connection: Connection) {
    }

    async getAll(): Promise<Emprestimo[]> {
        const output = []
        const EmprestimosData = await this.connection.execute(`SELECT e.id AS emprestimo_id, e.data_emprestimo, e.data_devolucao,
                    p.id AS pessoas_id, p.nome AS pessoa_nome, p.documento AS pessoa_documento,
                    u.id AS usuario_id, u.nome_usuario AS nome_usuario,
                    i.id AS item_id, i.nome AS item_nome,
                    ti.id AS tipo_item_id, ti.nome AS nome_tipoitem,
                    ie.ca AS item_epi_ca, ie.validade AS item_epi_validade
                FROM emprestimos e
                LEFT JOIN pessoas p ON e.pessoas_id = p.id
                LEFT JOIN usuarios u ON e.usuarios_id = u.id
                LEFT JOIN itens i ON e.itens_id = i.id
                LEFT JOIN tipos_item ti ON e.tipos_item_id = ti.id
                LEFT JOIN itens_epi ie ON i.id = ie.itens_id`);

        for (const emprestimoData of EmprestimosData) {

            const tipoItem = new TipoItem(
                emprestimoData.nome_tipoitem,
                emprestimoData.tipo_item_id
            )
            const itemEPI = new ItemEPI(
                emprestimoData.item_epi_ca,
                emprestimoData.item_epi_validade
            );

            const item = new Item(
                emprestimoData.nome,
                tipoItem,
                itemEPI,
                emprestimoData.id
            )

            const pessoa = new Pessoa(
                emprestimoData.id,
                emprestimoData.username,
                emprestimoData.documento

            )

            const usuario = new Usuario(
                emprestimoData.id,
                emprestimoData.nameuser,
                emprestimoData.senha,
                emprestimoData.pessoa
            )

            const emprestimo = new Emprestimo(
                emprestimoData.tipoItem,
                emprestimoData.item,
                emprestimoData.itemEpi,
                emprestimoData.data_emprestimo,
                emprestimoData.data_devolucao,
                emprestimoData.id,
                emprestimoData.usuario,
                emprestimoData.pessoa
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

        const itemEPI = new ItemEPI(
            emprestimoData.item_epi_ca,
            emprestimoData.item_epi_validade
        );

        const item = new Item(
            emprestimoData.nome,
            tipoItem,
            itemEPI,
            emprestimoData.id
        )

        const pessoa = new Pessoa(
            emprestimoData.id,
            emprestimoData.username,
            emprestimoData.documento
        )

        const usuario = new Usuario(
            emprestimoData.id,
            emprestimoData.nameuser,
            emprestimoData.senha,
            emprestimoData.pessoa
        )

        const emprestimo = new Emprestimo(
            emprestimoData.tipoItem,
            emprestimoData.item,
            emprestimoData.itemEpi,
            emprestimoData.data_emprestimo,
            emprestimoData.data_devolucao,
            emprestimoData.id,
            emprestimoData.usuario,
            emprestimoData.pessoa
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
