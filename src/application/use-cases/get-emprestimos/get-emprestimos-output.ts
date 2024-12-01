import { TipoItem } from "../../../domain/entity/TipoItem";
import { ItemEPI } from "../../../domain/entity/value-object/item-epi";


export type GetEmprestimosOutput = {
  id: string;
  tipoItem: {
    id: string;
    name: string;
  };
  item: {
    id: string;
    nome: string;
    tipoItem: TipoItem;
    itemEPI: ItemEPI;
  };
  dataEmprestimo: Date;
  dataDevolucao: Date;
  pessoa: {
    id: string;
    nome: string;
    documento: string;
  };
  usuario: {
    id: string;
    username: string;
    senha: string;
    pessoa: {
      id: string;
      nome: string;
      documento: string;
    };
  };
};





/* import { TipoItem } from "../../../domain/entity/TipoItem";
import { ItemEPI } from "../../../domain/entity/value-object/item-epi";

 type item = {
    id: string ;
    nome: string;
    tipoItem: tipoItem;
    itemEPI: ItemEPI ;
}

 type usuario = {
    id: string ;
    username: string;
    senha: string ;
    pessoa: pessoa;

}

type pessoa = {
    id: string ;
    nome: string;
    documento: string;
}

type tipoItem = TipoItem;

export type GetEmprestimosOutput = {
  id: string;
  item: item;
  tipoItem: tipoItem;
  dataEmprestimo: Date;
  dataDevolucao: Date;
  pessoa: pessoa;
  usuario: usuario;
}
*/