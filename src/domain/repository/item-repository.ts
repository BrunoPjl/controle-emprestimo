import { Item } from "../entity/Item";
export interface ItemRepository{
    getall(): Item[];
    getById(id: string): Item;
    create(item: Item): void;
    update(item: Item): void;
}//beleza sobe