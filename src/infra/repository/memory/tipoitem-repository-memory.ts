import { TipoItem } from "../../../domain/entity/TipoItem";
import { TipoItemRepository } from "../../../domain/repository/tipo-item-repository";

export class TipoItemRepositoryMemory implements TipoItemRepository{

    private tipos: TipoItem[];

    constructor(){

       
        this.tipos = [

         new TipoItem('copos', '3f8a4dda-7674-429a-9b09-c8e9a7f609af'),
         new TipoItem('computadores', '306b482e-aa11-4772-a531-eee9429ec7a3')
         
        ]
    }


    getall(): TipoItem[] {
        return this.tipos
    }
    getById(id: string): TipoItem {
        const item = this.tipos.find(valor => valor.getId() == id)
        if(!item){
            throw new Error('tipoitem not found')
        }

        return item;
    }
    create(tipoitem: TipoItem): void {
       this.tipos.push(tipoitem)
    }
    update(tipoitem: TipoItem): void {
        throw new Error("Method not implemented.");
    }
}