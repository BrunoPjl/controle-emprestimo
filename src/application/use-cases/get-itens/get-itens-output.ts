type GetTipoItensOutput = {
    id: string;
    name: string;
}

export type GetItensOutput = {
    id: string;
    name: string;
    tipoItem: GetTipoItensOutput;
}