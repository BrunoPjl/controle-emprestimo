import { Item } from "../entity/Item";

export interface ItemRepository{
    getAll(): Promise<Item[]>;
    getById(id: string): Promise<Item>;
    create(item: Item): Promise<void>;
    update(item: Item): Promise<void>;
    delete(id: string): Promise<void>;
    }