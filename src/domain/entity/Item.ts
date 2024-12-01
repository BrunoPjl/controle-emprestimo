import { v4 } from 'uuid';

import { ItemEPI } from './value-object/item-epi';
import { TipoItem } from './TipoItem';


export class Item {
  
  private name: string;
  private tipoItem: TipoItem
  private itemEpi: ItemEPI;
  private id: string;
  
  constructor(name: string, tipoItem: TipoItem, itemEpi: ItemEPI, id?: string) {
    if(!id){
        id = v4();
    }
    this.id = id;
    this.name = name;
    this.tipoItem = tipoItem;
    this.itemEpi = itemEpi;
  }

  getId(): string {
    return this.id
  }

  getName(): string {
    return this.name;
  }

  getTipoItem(): TipoItem {
    return this.tipoItem;
  }

  getItemEPI(): ItemEPI {
    return this.itemEpi;
  }
}