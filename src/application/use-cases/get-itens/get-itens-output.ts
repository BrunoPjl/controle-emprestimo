import { ItemEPI } from "../../../domain/entity/value-object/item-epi";

type GetTipoItensOutput = {
    id: string;
    name: string;
}

export type GetItensOutput = {
    id: string;
    name: string;
    tipoitem: GetTipoItensOutput;
    itemEpi: ItemEPI;
}