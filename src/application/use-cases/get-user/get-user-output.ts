type GetPessoaOutput = {
    name: string;
    documento: string
    id: string;
}

export type GetUserOutput = {
    id: string;
    nameuser: string;
    password: string;
    pessoa: GetPessoaOutput;
}