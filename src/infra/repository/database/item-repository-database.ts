import { Item } from "../../../domain/entity/Item";
import { TipoItem } from "../../../domain/entity/TipoItem";
import { ItemEPI } from "../../../domain/entity/value-object/item-epi";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { Connection } from "../../database/connection";


export default class ItemRepositoryDatabase implements ItemRepository {

    constructor(private connection: Connection) {
    }
    create(item: Item): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(item: Item): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    async getAll(): Promise<Item[]> {
        const output = []
        const itensData = await this.connection.execute(`
             SELECT i.id, i.nome, ti.id AS tipo_item_id, ti.nome AS nome_tipoitem, 
                    ie.ca, ie.validade
                FROM itens i 
                LEFT JOIN tipos_item ti ON i.tipo_item_id = ti.id
                LEFT JOIN itens_epi ie ON i.id = ie.itens_id;`);

        for (const itemData of itensData) {
            const tipoItem = new TipoItem(
                itemData.nome_tipoitem,
                itemData.tipo_item_id
            )
            const itemEpi = new ItemEPI(itemData.ca, itemData.validade);

            const item = new Item(
                itemData.nome,
                tipoItem,
                itemEpi,
                itemData.id
                
                )

            output.push(item)
        }

        return output;
    }

    async getById(id: string): Promise<Item> {
        const [ itemData ] = await this.connection.execute(`
            select i.id, i.nome, ti.id as tipo_item_id, ti.nome as nome_tipoitem
            from itens i 
            left join tipos_item ti on i.tipo_item_id = ti.id
            where i.id = $1`,
            [id]
        );

        if (!itemData) {
            throw new Error('Item não encontrado');
        }
        const itemEpi = new ItemEPI(itemData.ca, itemData.validade);

        const tipoItem = new TipoItem(
            itemData.nome_tipoitem,
            itemData.tipo_item_id
        )

        const item = new Item(
            itemData.nome,
            tipoItem,
            itemEpi,
            itemData.id
            )

        return item;
    }
    /*
    async create(item: Item): Promise<void> {
        await this.connection.execute(`
            insert into itens(id, nome, tipo_item_id)
            values ($1, $2, $3)`,
            [item.getI, item.name, item.getTipoItem().getId()]);        
    }

    async update(item: Item): Promise<void> {
        await this.connection.execute(`
            update itens set
            nome = $1,
            tipo_item_id = $2
            where id = $3
            `,
            [item.name, item.getTipoItem().getId(), item.id]);
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }*/
}
