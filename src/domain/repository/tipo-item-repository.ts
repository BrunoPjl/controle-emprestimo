import { TipoItem } from "../entity/TipoItem";

export interface TipoItemRepository{
    getall(): TipoItem[];
    getById(id: string): TipoItem;
    create(tipoitem: TipoItem): void;
    update(tipoitem: TipoItem): void;
}

//beleza sobe