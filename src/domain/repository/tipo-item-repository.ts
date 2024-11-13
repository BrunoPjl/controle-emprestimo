import { TipoItem } from "../entity/TipoItem";

export interface TipoItemRepository{
    getAll(): Promise<TipoItem[]>;
    getById(id: string): Promise<TipoItem>;
    create(itemType: TipoItem): Promise<void>;
    update(itemType: TipoItem): Promise<void>;
}

